const loadData = async () => { 
    const req = await fetch('products.json');
    const res = await req.json();
    return res;
    
 }
 export default loadData;