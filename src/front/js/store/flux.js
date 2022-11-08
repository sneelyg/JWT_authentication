const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,

			resultado_login: [],
			resultado_signup: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch("https://3001-sneelyg-jwtauthenticati-4xzemie4fs3.ws-us74.gitpod.io" + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},

			/**Función de Login acá abajo */
			login_func: (login_email, login_password) => {


				console.log("Haciendo login con" + login_email + "  clave es  " + login_password)
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					"email": "santiago@123.cl",
					"password": "12345"
				});

				var requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: raw,
					redirect: 'follow'
				};

				fetch("https://3001-sneelyg-jwtauthenticati-4xzemie4fs3.ws-us74.gitpod.io/login", requestOptions)
					.then(response => response.json())
					.then(result => {
						console.log(result)
						localStorage.setItem("token", result.token)
						/**Local */
					})
					.catch(error => console.log('error', error));






			},

			signup_func: (signup_email, signup_password) => {

				console.log("Haciendo signup con" + signup_email + "  clave es  " + signup_password)
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				let request_body = JSON.stringify({
					"email": signup_email,
					"password": signup_password
				})

				var requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: request_body,
					redirect: 'follow'
				};

				fetch("https://3001-sneelyg-jwtauthenticati-4xzemie4fs3.ws-us74.gitpod.io/signup", requestOptions)
					.then(response => response.json())
					.then(result => {
						console.log(result)
						if (result.registro == "ok") {
							alert("registro exitoso");
							window.location.href = "/";
						}
						else { alert("Registro no exitoso") }

					}).catch(error => console.log('error', error));


			},

			private: () => {
				console.log("llamando funcion privada")
				var myHeaders = new Headers();
				var token1 = localStorage.getItem("token");
				let autorizacion = "Bearer " + token1;
				console.log(autorizacion)
				myHeaders.append("Authorization", autorizacion);


				var requestOptions = {
					method: 'GET',
					headers: myHeaders,
					redirect: 'follow'
				};

				fetch("https://3001-sneelyg-jwtauthenticati-4xzemie4fs3.ws-us74.gitpod.io/private", requestOptions)
					.then(response => response.json())
					.then(result => {

						if (result.success == "ok") {
							console.log(result)
						}
						else {
							console.log("NOT")
							window.location.href = "/login"
						}
					})
					.catch(error => console.log('error', error));
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
