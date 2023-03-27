const loadData = async () => { 
    const req = await fetch('products.json');
    const res = await req.json();
    console.log(res);
    return res;
    
 }
 export default loadData;