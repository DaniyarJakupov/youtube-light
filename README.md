# youtube-light
<table>
<tr>
<td>
   Minimalistic youtube. Just kidding. This was my first react application. Nothing fancy, simple app. If you just want to watch video from youtube without loading [YouTube](https://www.youtube.com/) itself, this is it ;)
</tr>
</table>

###Getting Started###

Clone this repo and run `npm install` to install all the dependencies.
```
	> git clone https://github.com/DaniyarJakupov/youtube-light.git
	> cd youtube-light
	> npm install
```

In order to run this app, you will need API key for youtube. It's completely free. You just need google account.  Here is the instruction:
```
	> go to https://console.developers.google.com/apis/library
	> in the search term type in `youtube`
	> choose `YouTube Data API v3` and enable it
   > now go to `Credentials` section (left menu), press `create credentials` and choose API Key
   > copy provided API and paste it in src/index.js file to the `const  API_KEY = `
```

Once the dependencies are installed and API key is handled, you can run `npm start` to start the application. You will then be able to access it at http://localhost:8080/


## Acknowledgments

* Hat tip to anyone who's code was used
