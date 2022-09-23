import { Asset, createAsset } from "./assets";
import { getContext } from "./global";

export function printText(text, x, y, size, context = 2)
{
    for(var i = 0; i < text.length; i++)
    {
        var chr = text[i];
        
        var xc = x + (i * 6 * size);
        printChar(chr, xc, y, size, context);
    }
}
function printChar(chr, x, y, size, context = 2)
{
    var code = chr.charCodeAt(0);
    createAsset(new Asset(code.toString(), x, y, size), getContext(context));
    //var bmp = chars[code];
    
    //noStroke();
    //fill(printColor);

    /*for(var row = 0; row < bmp.length; row++)
    {
        var t = numberToBinary(bmp[row], 8);
        
        for(var col = 0; col < t.length; col++)
        {
            var xr = x + col * size;
            var yr = y + row * size;
            
            if (t[col] == "1")
                printDot(xr, yr, size);
        }
    }*/
}