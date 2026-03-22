const fs = require('fs');
const path = require('path');

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // If it's a dashboard page, it has <main className="flex-1 ml-72 p-10">
      // We want to add <Footer /> right before </main>
      
      if (content.includes('</main>')) {
        // Check if Footer is imported
        if (!content.includes('import Footer')) {
          // Add import after the last import
          const importRegex = /import.*?;/g;
          let match;
          let lastImportIndex = 0;
          while ((match = importRegex.exec(content)) !== null) {
            lastImportIndex = match.index + match[0].length;
          }
          
          // Calculate relative path to components/Footer
          const depth = fullPath.split('/').length - 3; // src/pages/petowner/Page.tsx -> depth 2
          const prefix = depth === 2 ? '../../' : '../';
          
          content = content.slice(0, lastImportIndex) + `\nimport Footer from "${prefix}components/Footer";` + content.slice(lastImportIndex);
        }
        
        // Add <Footer /> before </main>
        if (!content.includes('<Footer />')) {
          content = content.replace('</main>', '  <Footer />\n      </main>');
          fs.writeFileSync(fullPath, content);
        }
      }
    }
  }
}

processDirectory(path.join(__dirname, 'src/pages'));
console.log('Done');
