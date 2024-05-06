//Local storage
export const fetchData = (key, dataType = 'json') => {
    const data = localStorage.getItem(key);
    if(data){
        switch (dataType) {
            case 'json':
                return JSON.parse(data);
             case 'string':
                return data;
             case 'number':
                return parseFloat(data);
            case 'boolean':
                return data === 'true';
            default:
                return data;           
        }
    }
    return null;
}; 