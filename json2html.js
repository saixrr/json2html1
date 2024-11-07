
export default function json2html(data) {

  const columns = Array.from(new Set(data.flatMap(Object.keys)));

  const headerHtml = `<thead><tr>${columns.map(col => `<th>${col}</th>`).join('')}</tr></thead>`;

  const bodyHtml = `<tbody>${
    data.map(row => 
      `<tr>${columns.map(col => `<td>${row[col] !== undefined ? row[col] : ''}</td>`).join('')}</tr>`
    ).join('')
  }</tbody>`;

  return `<table data-user="saimonajigari@gmail.com">${headerHtml}${bodyHtml}</table>`;
}
