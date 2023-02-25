var atlas = [{
    src: Image,
    images: [{
        atlas: 0,
        name: "imageName",
        x: 0,
        y: 0,
        dx: 0,
        dy: 0,
        width: 16,
        height: 16,
        dw: 48,
        dh: 48
    }]
}];

export const assetsMap = new Map();

export class Asset{
    constructor(name = "item", x = 0, y = 0, size = 1){
        this.name = name;
        this.x = x;
        this.y = y;
        this.size = size;
        let source;
    }
    getInfo(){
        return {name:this.name, position:{x:this.x, y:this.y}, radius:{width:this.source.width, height:this.source.height}};
    }
}

export function asepriteConfig(atlasImgs=[], json=[]){
    var i = 0;
    for (let index = 0; index < atlasImgs.length - 1; index++) {
        atlas.push({src:null, images:[{}]});
    }
    atlasImgs.forEach(a => {
        var img = new Image();
        img.src = a;
        atlas[i].src = img;
        try {
            json[i].meta.slices.forEach(s => {
                var img = {
                    atlas:i,
                    name: s.name,
                    x: s.keys[0].bounds.x,
                    y: s.keys[0].bounds.y,
                    width: s.keys[0].bounds.w,
                    height: s.keys[0].bounds.h
                }
                atlas[i].images.push(img);
                assetsMap.set(img.name, atlas[i].images[atlas[i].images.length - 1]);
            })
        } catch (error) {
            console.log(error);
        }
        i++;
    })
    console.log(atlas);
}

export const createAsset = (asset, ctx) =>{
    var a = assetsMap.get(asset.name);
    if(!a)return;
    if(a){
        var w = a.width*asset.size;
        var h = a.height*asset.size;
        a.dx = asset.x;
        a.dy = asset.y;
        a.dw = w;
        a.dh = h;
        ctx.drawImage(atlas[a.atlas].src, a.x,a.y,a.width,a.height,asset.x,asset.y,w,h);
        asset.source = a;
    }
    return asset;
}

export const getAsset = (asset) =>{
    var a = assetsMap.get(asset);
    if(!a){
        console.log("didnt find the asset you are looking for...");
        return;
    }
    return a;
}
export const updateAsset = (asset, ctx) =>{
    var a = assetsMap.get(asset);
    if(!a){
        console.log("didnt find the asset you are looking for...");
        return;
    }
    console.log(a);
    ctx.drawImage(atlas[a.atlas].src, a.x,a.y,a.width,a.height,a.dx,a.dy,a.dw,a.dh);
}
export const clearAsset = (asset,ctx) => {
    var a = getAsset(asset);
    if(a){
        ctx.clearRect(a.dx,a.dy,a.dw,a.dh);
    }
}