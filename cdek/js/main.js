const calcForm = document.querySelector('#compare-form');

const fetchData = () => {
	return {
		API_TOKEN: "XgoKVtotMNsxb9xbJDvsXNWCwINR3X1n",
		API_PASSWORD: "9Bbkw6leCyldn73XDrjcz8G199zOGO87",
		
		data: {
			del_d2d: 0,
		},

		async sendRequest() {
			const response = await fetch(`https://api.cdek.ru/v2/oauth/token?client_id=${this.API_TOKEN}&client_secret=${this.API_PASSWORD}&grant_type=client_credentials`, {
				method: "POST",
				headers: {
					"Access-Control-Allow-Origin": "https://api.cdek.ru",
				}
			});
			console.log(response)
		}
	}
}



