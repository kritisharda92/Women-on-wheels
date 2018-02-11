export const baseUrl = 'http://129.21.63.107:3000/api/';
/**
 * This class provides all API calls for wellness mobile functionality
 */
export class WoWAPI{

    /**
     * Gets all event titles and event information based on the event search for a given day
     */
    login(woman) {
        
        let self =this;
        return new Promise(function(resolve,reject){
            let womanObject = {
                'name': woman.fname,
                'email': woman.email,
                'password': woman.password,
                'isExistingUser' : woman.isExistingWoman
            };

            let url = baseUrl + "login";
            let xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function () {
                if (xmlHttp.readyState === 4){ 
                    if(xmlHttp.status === 200) {
                        let response = JSON.parse(xmlHttp.response);
                        resolve(response);
                    }
                    else{
                        console.log(xmlHttp.status);
                        
                    }
                }
            }
            xmlHttp.open('post', url);
            xmlHttp.setRequestHeader('Content-Type', 'application/json');
            xmlHttp.setRequestHeader('Access-Control-Allow-Origin', '*');
            xmlHttp.send(JSON.stringify(womanObject));
        });
    }

    getLocations(mood){
        let self =this;
        return new Promise(function(resolve,reject){
            

            let url = baseUrl + "users/" + mood;
            let xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function () {
                if (xmlHttp.readyState === 4){ 
                    if(xmlHttp.status === 200) {
                        let response = JSON.parse(xmlHttp.response);
                        resolve(response);
                    }
                    else{
                        console.log(xmlHttp.status);
                        
                    }
                }
            }
           
            xmlHttp.open('get', url,true);
            xmlHttp.setRequestHeader('Content-Type', 'application/json');
            xmlHttp.setRequestHeader('Access-Control-Allow-Origin', '*');
            xmlHttp.send(null);
        });
    }
}