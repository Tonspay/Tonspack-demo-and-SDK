class Tonspack{
    constructor(uuid,config)
    {
        if(uuid)
        {
            this.uuid = uuid
        }else{
            this.uuid = crypto.randomUUID();
        }

        if(config?.baseurl)
        {
            this.baseurl = config.baseurl
        }else{
            this.baseurl = "https://pack.tons.ink/api"
        }

        if(config?.actionUrl)
        {
            this.actionUrl = config.actionUrl
        }else{
            this.actionUrl = 'https://t.me/tonspack_bot/connect?startapp='
        }

        if(config?.loopInterval)
        {
            this.loopInterval = config.loopInterval
        }else{
            this.loopInterval = 500 //0.5
        }

        if(config?.loopTimeout)
        {
            this.loopTimeout = config.loopTimeout
        }else{
            this.loopTimeout = 120 //1min
        }
    }

    async loopCheck() {
        for(var i = 0 ; i < this.loopTimeout ; i++)
        {
            const ret = await this.check_request_action()
            if(ret.data)
            {
                return ret.data
            }
            await this.sleep(this.loopInterval)
        }
        return {
            status:false,
            reason:"user operation timeout"
        }
    }

    async sleep (ms) {
        return new Promise((resolve) => {
        setTimeout(resolve, ms);
        });
    }
    async check_request_action(){
        try{
            return (await fetch(this.baseurl+'/result/'+this.uuid,{
                method: "GET",
                headers: {},
                redirect: 'follow'
            })).json()
        }catch(e)
        {
            console.error(e)
            return false;
        }
    }

    async connect(chian,redirect) {
        const site = window.location.origin
        
        const d =  {
                        t:0,
                        i:this.uuid, 
                        d:site, 
                        c:chian, 
                        r:redirect || null
                    }

        window.open(this.actionUrl+base58.encode(Buffer.from(JSON.stringify(d))),"newwindow","height=800, width=400, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
        return await this.loopCheck()
    }

    async sign(chian,sign,redirect,preconnect) {
        const d =  {
                        t:1,
                        i:this.uuid, 
                        d:sign, 
                        c:chian, 
                        r:redirect || null
                    }
        if(preconnect)
        {
            var op = {
              method: 'POST',
              headers:{},
              body: base58.encode(Buffer.from(JSON.stringify(d))),
              redirect: 'follow'
            };
            d = {
                i:await fetch(`${this.baseurl}/preconnect/${d.i}`, op),
                p:1
            }
        }
        window.open(this.actionUrl+base58.encode(Buffer.from(JSON.stringify(d))),"newwindow","height=800, width=400, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
        return await this.loopCheck()
    }

    async send(chian,txs,redirect,preconnect) {
        const d =  {
                        t:2,
                        i:this.uuid, 
                        d:txs, 
                        c:chian, 
                        r:redirect || null
                    }
        if(preconnect)
        {
            var op = {
              method: 'POST',
              headers:{},
              body: base58.encode(Buffer.from(JSON.stringify(d))),
              redirect: 'follow'
            };
            d = {
                i:await fetch(`${this.baseurl}/preconnect/${d.i}`, op),
                p:1
            }
        }
        window.open(this.actionUrl+base58.encode(Buffer.from(JSON.stringify(d))),"newwindow","height=800, width=400, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
        return await this.loopCheck()
    }
}

