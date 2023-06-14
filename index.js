const grades = [
    { student: 'John', math: 90, science: 95, history: 87 },
    { student: 'Emily', math: 92, science: 88, history: 90 },
    { student: 'David', math: 85, science: 79, history: 92 },
  ];
  
  function generateGradesTable(grades) {
    const tableHeader = '<tr><th>Student</th><th>Math</th><th>Science</th><th>History</th></tr>';
    let tableRows = '';
  
    for (const grade of grades) {
      const row = `<tr><td>${grade.student}</td><td>${grade.math}</td><td>${grade.science}</td><td>${grade.history}</td></tr>`;
      tableRows += row;
    }
  
    const table = `<table>${tableHeader}${tableRows}</table>`;
    const pageTitle = 'Student Grades';
    const pageContent = `<h1>${pageTitle}</h1>${table}`;
  
    return `<!DOCTYPE html><html><head><title>${pageTitle}</title></head><body>${pageContent}</body></html>`;
  }
  
  const htmlPage = generateGradesTable(grades);
  
  innerHTML = htmlPage;