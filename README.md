# Crypto Buddy
      Home Page
![](https://lh5.googleusercontent.com/93BJt4ycKqn_Nufbyrk04hlJnIezkUvE8Vc4LYz1e4-k9FlvWlkNzVAAXMdowBQcgXuWjPkl-D7FT7WdC3avrKOO0wse1xj7K4G6DUQde7_zBJlAynBGrqxjoUDQORB9Q2fI3up-VCcZsclTHA)

      Cryptocurrency Details Page
![](https://lh4.googleusercontent.com/MwsUGEHELCqJN1VC_kd70L4PGVrSfoj2hYcynxk7RVpcZ9UFt62IvZKymQtbqqelXbYw9UoVEZwIx_xbrEHSaOJfp5BBIKS3zfEramUNF4a2-47GC7yR8hj4b0qGVyMSb_W1MOCcxSkypI1f8A)

      Cryptocurrency Details Page
![](https://lh4.googleusercontent.com/ojxl-ckUrHNeeQXbfvIjrXbovIRJPeZNS26ZlD49M14OxJhezqLJDMpgqF2iG1QaAc8AD4-QI42qNxc0TkCY4JAci7JytsK8zbPxiJlCkAjUl6sTmpZ9NHDDVneGNo6A-IIDa1V6RHHB7UlstA)
### Table of Contents

1.  Project Demo Link
    
2.  Purpose
    
3.  Motivation
    
4.  Packages Used
    
5.  App Structure
    

### Project Demo Link: [](https://smiley-blackjack-game.netlify.app/) [Crypto Buddy App](https://crypto-buddy-herting.netlify.app/)

### Purpose:

Crypto Buddy is a React web application that displays top cryptocurrencies on the home page, as well as, the cryptocurrency details page for each cryptocurrency.

### Motivation:

The goal was to practice building React.js applications that use an API for all details pertaining to each cryptocurrency.

### Packages Used:**

“[@material-ui/core](https://www.npmjs.com/package/@material-ui/core)": "^4.12.4”

A library that was used to import and use different React components to create a user interface.

“[@material-ui/lab](https://www.npmjs.com/package/@material-ui/lab)”: “^4.0.0 -alpha.61”

“[axios](https://www.npmjs.com/package/axios)”: “^0.21.1”

Axios is a promise based HTTP request library that allows the React app to interface with [REST APIs](https://www.redhat.com/en/topics/api/what-is-a-rest-api).

“[chart.js](https://www.npmjs.com/package/chart.js?activeTab=readme)”: “^3.5.1”

JS library used for [creating customizable charts](https://blog.logrocket.com/using-chart-js-react/) on applications.

“[React](https://www.npmjs.com/package/react)”: “^17.0.2”

JS library used for creating user interfaces.

“[React-dom](https://www.npmjs.com/package/react-dom)”: “^17.0.2”

ReactDOM is a package that provides DOM specific methods that efficiently [sync the real](https://dev.to/koolkishan/what-is-virtual-dom-how-virtual-dom-works-what-is-reconciliation-what-is-diffing-algorithm-what-makes-react-so-fast-327a) DOM with the virtual DOM when changes are detected.

“[React-router-dom](https://www.npmjs.com/package/react-router-dom)”: “^5.2.0”

NPM package that allows us to [implement dynamic routing](https://www.geeksforgeeks.org/what-is-react-router-dom/) for an application.

“[React-scripts](https://www.npmjs.com/package/react-scripts)”: “4.0.3”

“[React-alice-carousel](https://www.npmjs.com/package/react-alice-carousel)”: “^2.6.0”

React component that allows us to build the React carousel used to display cryptocurrencies in the hero section of this app.

“[React-chartjs-2](https://www.npmjs.com/package/react-chartjs-2)”: “^3.3.0”

Charting library that was used to create the line chart for each cryptocurrency.

### App Structure:

![](https://lh5.googleusercontent.com/w5gwJfducJZ_PBjy0oOUetLz0ysPZXpB0FtFKhW_fAWDZ0q5hMfOfbKa1dqc0zHjy5SbLHWIqrtSSzNEVaoqRBQ1B2kZlI5dmiT9VjUeD7XKfkx1wbhOqOrL2m1p-ng7c-JvpD8HxKncKJnu5w)
The create context hook was used to create the **CryptoContext** component that contains the crypto buddy application. The context hook allows us to pass data for the app through the component tree without having to pass down props at every level.

The **CryptoContext** component is wrapped inside of a provider React component that allows children components to be subscribed to any context changes we want, such as ***currency**, **setCurrency***, and ***symbol***. The children components within **CryptoContext** gain access to these values by using the React **useContext** hook. In the CrypoContext.js file, a **CryptoState** function was created that returns **useContext(Crypto),** which is why the children use **CryptoContext( )** instead of **useContext(Crypto)**. Crypto is the container/context that was created.

  ![](https://lh5.googleusercontent.com/yVWkwO5j9prXkNXwGddvYZJ5c58zogXgC_Fl27y-7AmVbmW7Ytk74DJiv5mx2WKmlr3mH2s1mfH4QBzZHo8MQtGTpQ4bBDD-hzAULdGW5UYbi3162FdBAMXLL5KClxvMULmzaxgOeXb8_91COw)
  
Inside of the **CryptoContext** component, we use the **useEffect** React hook to update the symbol when the currency is updated. The use of **useEffect** indicates to React that after rendering, the component will need to do something.

![](https://lh3.googleusercontent.com/qfwhhdFmyzlcxSaPvc5cphFeVqjlhKp_Gs_K_T4rXLzcfSiHcBnnzHc8-Ao-7dn-kKdd4r47AnT_Jmf3FdR9Yp4JTMJ8koZf-zqAaVSU0vcpppILq3tzbuPAjDV-teu0X51dI9EVzTgC66reZQ)
The **api.js** file contains a list of exported functions, each containing variables that will be passed through to update the api request (URL) that will be sent via an **axios.get( ).** An example of one can be seen below.

![](https://lh3.googleusercontent.com/q4Yl5d7g_WUQHcvDII7dlmwkzU4utmDDL4QZOR1XrKIwNBk3GT3JlEudKRfNQHlW2e3--HTQHBfIppYLPp8mBLbKb98rUgpfBtIFpTgpPUcOrvsnaKxLB6oERTrnXrkIHDDRq5Dml-FyhwraSg)

On the homepage, we have a table that displays cryptocurrencies by rank. In order to create this table, we created an async function called ***‘fetchCoins’*** that uses **axios.get** to retrieve the data collected when the api call for **CoinList** is called and the currency passed inside of it. Once the data is received. The use state hook for **setCoins** is called and the data passed to it in order to populate the data we will use to generate a row for each cryptocurrency in the table. 

![](https://lh4.googleusercontent.com/BZICwc9Rh7bAAnrEj7qUUeeBoUlEXIC5Kh_s8P0Chq-bOteVpbYW-doUqZOiGEFGO31AoJkpzBdE9sVsjS-8BSR2MCbAIkGP2E73poNfDdHM25jVv0cjd8mGWbdm3GBWLVPcF5IG_k1zgKU_Vw)

![](https://lh6.googleusercontent.com/pJqndJKsPtZcZHRA3bGjKffptwnDt8U8sm4QKuAXus7PJzPrDRRhWL0vGcFmIAip7LcqY07Voh1Ltp3U4IEI4SskiTtH0zaqK8FLGXIDkHkIExst9AOyWqDGvnhnVgzkUkymqVFshm-cKIJ-xg)

![](https://lh4.googleusercontent.com/ZoCF8-j9rf_tqHCMk9C7y39kd8Wr3nVDS-C8PYeyApyNTF5MWpZUTdpp8NP4_QXdBQty_fNspUZZlKCbkTEqd3PufuLEF9if5uvsmukwxCJcCOCN_DvwqVmx1ZMGHq7EdzedvX42tPIq8DGr-A)

Inside of our components you will see a section of code that calls the useStyles hook, which is a React hook that allows us to generate CSS stylesheets and inject them into our components.

  ![](https://lh5.googleusercontent.com/tNHkI9_kYGjeUc2F3HAm9K7ibVppGWSPLrpcDYdn7IYLGZ5vJdoHzQ05nAggWTCFdlsgIjWB_ma15cq91QEIkaxaxR3SRMtTN_Akqk57IbPhokT6IhHUFdL3kBkIbp-3r3XMYtrrjf4DwtzE3Q)
  
In the CoinPage.js component, **useParams** from ‘**react-router-dom**’ was used in order to return the ‘id’ and use that value throughout the rest of the component.

![](https://lh4.googleusercontent.com/81fAvLFy7z7XNaakIC2iZ7V0r_arrPVcpeeUVMcbz3xWTyVULgjSLouqJUvB361BxN6wofNpMxP3AmnLeQNdUnelm7Tc6fdoNMv7Ers5A5BZKPns6jsTmpJFR01IjioJDIlTx4nwmbSfP9mHuw)

**ReactHtmlParser** was used to convert HTML strings into react components. There were a couple of cryptocurrency descriptions that had links and such, that required the use of **ReactHtmlParser** for them to be rendered correctly.

![](https://lh6.googleusercontent.com/MLvIy0L9iDxNBeBClleJj8WftXQGjpDdxVq_KL9xAx8dOmn5lZohHLhwgYnH_6yHzXmG0bdXBW1YeQzVCPKn9byQacRTJiHb0UWaTUttkhGe7Wof_KKOi5hJIfQEHyVV61eIqv4UXQ82RMKTZQ)
