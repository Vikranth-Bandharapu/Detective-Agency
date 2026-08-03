const fs = require('fs');

// Read the python file content (which has exactly the strings we need!)
// Wait, better yet, I will write a script that generates the replacement logic in JS!
// I'll just build the HTML string cleanly in JS.

function fixFile() {
    // We already have the logic inside the previous expand_to_10.js, we just need to fix the syntax error!
    let code = fs.readFileSync('expand_to_10.js', 'utf8');
    // The syntax error is:
    // style="background-image: url(\\'assets/' + images[i] + '.jpg\\');">
    // Should be:
    // style="background-image: url('assets/' + images[i] + '.jpg');">
    
    code = code.replace(/\\\\'assets/g, "'assets");
    code = code.replace(/\\.jpg\\\\'/g, ".jpg'");
    code = code.replace(/onerror="this.src=\\'/g, "onerror=\"this.src='");
    code = code.replace(/&color=fff\\'"/g, "&color=fff'\"");
    
    fs.writeFileSync('expand_to_10_fixed.js', code);
    console.log("Fixed script written to expand_to_10_fixed.js");
}

fixFile();
