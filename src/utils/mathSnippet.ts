/**
 * Utility to convert raw LaTeX math questions into clean, human-readable
 * plain-text / Unicode excerpts for compact list previews and search snippets.
 * Replaces ugly placeholders like '[...]' with natural mathematical text.
 */

export function formatMathSnippet(latexOrText: string, maxLength = 130): string {
  if (!latexOrText) return '';

  // 1. Strip question source tag if present at start e.g. "[Sở GD&ĐT Hà Nội 2025]"
  let text = latexOrText.replace(/^\[[^\]]+\]\s*/, '');

  // 2. Remove HTML tags if any
  text = text.replace(/<[^>]+>/g, '');

  // 3. Convert LaTeX functions & symbols to readable Unicode
  text = text
    .replace(/\\left\s*([(\[{|])/g, '$1')
    .replace(/\\right\s*([)\]}|])/g, '$1')
    .replace(/\\cos\b/g, 'cos')
    .replace(/\\sin\b/g, 'sin')
    .replace(/\\tan\b/g, 'tan')
    .replace(/\\cot\b/g, 'cot')
    .replace(/\\ln\b/g, 'ln')
    .replace(/\\log_([0-9a-zA-Z]+)\b/g, 'log_$1')
    .replace(/\\log\b/g, 'log')
    .replace(/\\pi\b/g, 'π')
    .replace(/\\alpha\b/g, 'α')
    .replace(/\\beta\b/g, 'β')
    .replace(/\\theta\b/g, 'θ')
    .replace(/\\Delta\b/g, 'Δ')
    .replace(/\\infty\b/g, '∞')
    .replace(/\\cdot/g, '·')
    .replace(/\\times/g, '×')
    .replace(/\\pm/g, '±')
    .replace(/\\le(q)?\b/g, '≤')
    .replace(/\\ge(q)?\b/g, '≥')
    .replace(/\\neq\b/g, '≠')
    .replace(/\\approx\b/g, '≈')
    .replace(/\\sim\b/g, '~')
    .replace(/\\in\b/g, '∈')
    .replace(/\\notin\b/g, '∉')
    .replace(/\\subset\b/g, '⊂')
    .replace(/\\cup\b/g, '∪')
    .replace(/\\cap\b/g, '∩')
    .replace(/\\emptyset\b/g, '∅')
    .replace(/\\forall\b/g, '∀')
    .replace(/\\exists\b/g, '∃')
    .replace(/\\int/g, '∫')
    .replace(/\\vec\{([^}]+)\}/g, 'vec($1)')
    .replace(/\\overrightarrow\{([^}]+)\}/g, 'vec($1)')
    .replace(/\\overline\{([^}]+)\}/g, '$1')
    .replace(/\\sqrt\[(\d+)\]\{([^}]+)\}/g, '$1√($2)')
    .replace(/\\sqrt\{([^}]+)\}/g, '√($1)')
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1)/($2)')
    .replace(/\\dfrac\{([^}]+)\}\{([^}]+)\}/g, '($1)/($2)')
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/\\mathbf\{([^}]+)\}/g, '$1')
    .replace(/\\mathit\{([^}]+)\}/g, '$1')
    .replace(/\\mathrm\{([^}]+)\}/g, '$1')
    .replace(/\\mathbb\{R\}/g, 'ℝ')
    .replace(/\\mathbb\{Z\}/g, 'ℤ')
    .replace(/\\mathbb\{N\}/g, 'ℕ')
    .replace(/\\mathbb\{Q\}/g, 'ℚ')
    .replace(/\\mathbb\{C\}/g, 'ℂ')
    .replace(/\\degree\b/g, '°')
    .replace(/\\circ\b/g, '°')
    .replace(/\\,/g, ' ')
    .replace(/\\;/g, ' ')
    .replace(/\\!/g, '')
    .replace(/\\quad/g, ' ')
    .replace(/\\qquad/g, '  ');

  // 4. Common superscripts
  text = text
    .replace(/\^0\b/g, '⁰')
    .replace(/\^1\b/g, '¹')
    .replace(/\^2\b/g, '²')
    .replace(/\^3\b/g, '³')
    .replace(/\^4\b/g, '⁴')
    .replace(/\^5\b/g, '⁵')
    .replace(/\^6\b/g, '⁶')
    .replace(/\^7\b/g, '⁷')
    .replace(/\^8\b/g, '⁸')
    .replace(/\^9\b/g, '⁹')
    .replace(/\^x\b/g, 'ˣ')
    .replace(/\^n\b/g, 'ⁿ')
    .replace(/\^\{([^}]+)\}/g, '^($1)');

  // 5. Common subscripts
  text = text
    .replace(/_0\b/g, '₀')
    .replace(/_1\b/g, '₁')
    .replace(/_2\b/g, '₂')
    .replace(/_3\b/g, '₃')
    .replace(/_4\b/g, '₄')
    .replace(/_5\b/g, '₅')
    .replace(/_n\b/g, 'ₙ')
    .replace(/_\{([^}]+)\}/g, '_$1');

  // 6. Strip remaining LaTeX delimiters and commands
  text = text
    .replace(/\$+/g, '') // remove $ and $$
    .replace(/\\([a-zA-Z]+)/g, '$1') // strip backslashes
    .replace(/\{([^{}]+)\}/g, '$1') // unwrap braces
    .replace(/\{|\}/g, '') // remove orphaned braces
    .replace(/\s+/g, ' ')
    .trim();

  // 7. Limit length if specified
  if (maxLength && text.length > maxLength) {
    return text.slice(0, maxLength).trim() + '...';
  }

  return text;
}
