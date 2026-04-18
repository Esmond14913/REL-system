const fs = require('fs');
const path = 'index.html';
let content = fs.readFileSync(path, 'utf8');

// 使用更穩健的正則表達式來定位函式區塊
const oldFuncRegex = /const downloadTemplate = \(\) => \{[\s\S]*?XLSX\.writeFile\(wb, fileName\);[\s\S]*?\};/;

const newFunc = `const downloadTemplate = () => {
  try {
    alert("Generating Template / 正在生成模板...");
    console.log("Download Triggered");
    const today = dayjs().format("YYYYMMDD");
    const fileName = \`HQA_Master_\${today}.xlsx\`;
    const wb = XLSX.utils.book_new();
    const createEmpty = (cols) => {
      const obj = {};
      cols.forEach(c => obj[c] = "");
      return [obj];
    };
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(createEmpty(["Project", "Stage", "Build", "Config", "Category", "Test item", "Q'ty", "Start", "End", "Result", "Report", "Remark"])), 'Records');
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(createEmpty(["Project", "Stage", "Build", "Config", "DUT ID", "SN", "Keeper", "item1", "item2", "Failure", "FA report", "Remark"])), 'Tracking');
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(createEmpty(["Project", "Stage", "Build", "Config", "Description", "Remark"])), 'Config');
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(createEmpty(["Project", "Stage", "Category", "Item", "Status", "Remark"])), 'Readiness');
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(createEmpty(["Project", "Stage", "Document name", "Link", "Remark"])), 'Documents');
    XLSX.writeFile(wb, fileName);
    alert("Download Success / 下載成功！");
  } catch (err) {
    console.error("Download Error:", err);
    alert("Download Failed: " + err.message);
  }
};`;

if (oldFuncRegex.test(content)) {
  content = content.replace(oldFuncRegex, newFunc);
  // 同步更新版本號
  content = content.replace('v1.1.2', 'v1.1.3');
  fs.writeFileSync(path, content, 'utf8');
  console.log('Successfully updated index.html to v1.1.3');
} else {
  console.error('Could not find the target downloadTemplate function in index.html');
  process.exit(1);
}
