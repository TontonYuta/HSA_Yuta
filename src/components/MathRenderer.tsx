import React, { useMemo } from 'react';
import katex from 'katex';

interface MathRendererProps {
  content: string;
  className?: string;
}

const mathCache = new Map<string, string>();

export const MathRenderer: React.FC<MathRendererProps> = ({ content, className = '' }) => {
  const renderedHtml = useMemo(() => {
    if (!content) return '';
    if (mathCache.has(content)) {
      return mathCache.get(content)!;
    }

    const parts: string[] = [];
    
    // Regular expression to match display ($$...$$ or \[...\]) and inline ($...$ or \(...\)) math
    const regex = /(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\$(?!\$)[\s\S]*?\$|\\\([\s\S]*?\\\))/g;

    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(content)) !== null) {
      if (match.index > lastIndex) {
        const textSegment = content.slice(lastIndex, match.index);
        parts.push(processPlainText(textSegment));
      }

      const rawFormula = match[0];
      const isDisplay = rawFormula.startsWith('$$') || rawFormula.startsWith('\\[');
      
      let mathCode = '';
      if (rawFormula.startsWith('$$')) {
        mathCode = rawFormula.slice(2, -2);
      } else if (rawFormula.startsWith('\\[')) {
        mathCode = rawFormula.slice(2, -2);
      } else if (rawFormula.startsWith('\\(')) {
        mathCode = rawFormula.slice(2, -2);
      } else if (rawFormula.startsWith('$')) {
        mathCode = rawFormula.slice(1, -1);
      }

      try {
        // Automatically repair any accidental JS escape sequences, lim, to, and escape standalone % signs
        let sanitizedMath = mathCode.trim()
          .replace(/\x0crac/g, '\\frac')
          .replace(/\x08egin/g, '\\begin')
          .replace(/\x08ar/g, '\\bar')
          .replace(/\x09imes/g, '\\times')
          .replace(/\x09ext/g, '\\text')
          .replace(/\x09heta/g, '\\theta')
          .replace(/\x09au/g, '\\tau')
          .replace(/\x09o\b/g, '\\to')
          .replace(/[\r\n]+e\b/g, ' \\ne ')
          .replace(/[\r\n]+i\b/g, ' \\ni ')
          .replace(/[\r\n]+u\b/g, ' \\nu ')
          .replace(/\bl\\left\b/g, '\\left')
          .replace(/\bl\\right\b/g, '\\right')
          .replace(/y_\{CĐ\}/g, 'y_{\\text{CĐ}}')
          .replace(/y_\{CT\}/g, 'y_{\\text{CT}}')
          .replace(/\\lim(?!\s*\\limits)(_\{|\s*_{)/g, '\\lim\\limits_{')
          .replace(/(?<!\\)lim_\{/g, '\\lim\\limits_{')
          .replace(/\\lim_\{/g, '\\lim\\limits_{')
          .replace(/\b([xtn])\s+o\s+([+\-]?\\?(?:infty|pminfty|\d+))/g, '$1 \\to $2')
          .replace(/pminfty/g, '\\pm\\infty')
          .replace(/\\pm\s*infty/g, '\\pm\\infty')
          .replace(/(?<!\\)pm\\infty/g, '\\pm\\infty')
          .replace(/(?<!\\)mathbb\{/g, '\\mathbb{')
          .replace(/([0-9a-zA-Z\^]+)sqrt\{/g, '$1\\sqrt{')
          .replace(/(?<!\\)sqrt\{/g, '\\sqrt{')
          .replace(/(?<!\\)frac\{/g, '\\frac{')
          .replace(/(?<!\\)%/g, '\\%');

        const html = katex.renderToString(sanitizedMath, {
          displayMode: isDisplay,
          throwOnError: false,
          output: 'html',
          trust: false,
          strict: false,
        });
        parts.push(isDisplay ? `<div class="my-2 overflow-x-auto py-1 text-center">${html}</div>` : `<span class="inline-block px-0.5">${html}</span>`);
      } catch (e) {
        parts.push(`<span class="text-rose-500 font-mono text-sm">${escapeHtml(rawFormula)}</span>`);
      }

      lastIndex = match.index + rawFormula.length;
    }

    if (lastIndex < content.length) {
      parts.push(processPlainText(content.slice(lastIndex)));
    }

    const finalHtml = parts.join('');
    mathCache.set(content, finalHtml);
    return finalHtml;
  }, [content]);

  return (
    <div
      className={`leading-relaxed tracking-normal font-sans text-zinc-800 dark:text-zinc-200 select-text ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function processPlainText(text: string): string {
  let safe = escapeHtml(text);
  
  safe = safe.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-zinc-900 dark:text-zinc-100">$1</strong>');
  safe = safe.replace(/\*(.*?)\*/g, '<em class="italic text-zinc-700 dark:text-zinc-300">$1</em>');
  safe = safe.replace(/\n\n/g, '<div class="h-2"></div>');
  safe = safe.replace(/\n/g, '<br />');

  return safe;
}

