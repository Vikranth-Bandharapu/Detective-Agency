const fs = require('fs');
const readline = require('readline');

async function extract() {
    const fileStream = fs.createReadStream('C:\\\\Users\\\\admin\\\\.gemini\\\\antigravity\\\\brain\\\\4b91b6e1-a5f4-43f4-8434-45e18ef709e8\\\\.system_generated\\\\logs\\\\transcript_full.jsonl');
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    let p1 = null, p2 = null, p3 = null, final = null;

    for await (const line of rl) {
        if (!line.trim()) continue;
        const obj = JSON.parse(line);
        if (obj.step_index >= 950) break;
        
        if (obj.tool_calls) {
            for (const call of obj.tool_calls) {
                if (call.name === 'write_to_file' || call.name === 'replace_file_content') {
                    const args = call.args;
                    if (args.TargetFile) {
                        if (args.TargetFile.includes('generate_tailwind_dash_p1.js')) p1 = args.CodeContent;
                        if (args.TargetFile.includes('generate_tailwind_dash_p2.js')) p2 = args.CodeContent;
                        if (args.TargetFile.includes('generate_tailwind_dash_p3.js')) p3 = args.CodeContent;
                        if (args.TargetFile.includes('generate_tailwind_dash_final.js')) final = args.CodeContent;
                    }
                }
            }
        }
    }

    if (p1) fs.writeFileSync('C:\\Users\\admin\\Desktop\\Detective agency\\generate_tailwind_dash_p1.js', p1);
    if (p2) fs.writeFileSync('C:\\Users\\admin\\Desktop\\Detective agency\\generate_tailwind_dash_p2.js', p2);
    if (p3) fs.writeFileSync('C:\\Users\\admin\\Desktop\\Detective agency\\generate_tailwind_dash_p3.js', p3);
    if (final) fs.writeFileSync('C:\\Users\\admin\\Desktop\\Detective agency\\generate_tailwind_dash_final.js', final);
    
    console.log('Restored scripts');
}

extract();
