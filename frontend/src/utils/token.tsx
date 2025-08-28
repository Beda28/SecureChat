import base64 from "base-64";

export const getId = (type: string) => {
    const token = localStorage.getItem("SecuerChat_Token")
    const payload = token?.split('.')[1]
    if (!payload) return 
    
    const json = JSON.parse(base64.decode(payload))
    if (type == 'id') return json.id
    else return json.uuid
}

export const checkExp = () => {
    const token = localStorage.getItem("SecuerChat_Token");
    
    if (!token) {
        return false;
    }

    try {
        const payload = token.split('.')[1];
        const decodedPayload = atob(payload);
        const tokenData = JSON.parse(decodedPayload);
        const expirationTime = new Date(tokenData.exp * 1000);
        const currentTime = new Date();
        
        return expirationTime > currentTime;

    } catch (e) {
        console.error(e);
        return false;
    }
}