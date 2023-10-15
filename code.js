const videos = ["qDpb_s7XhEU", "2cpgDhJgrrc", "mfFlhYL5TVE"];

function search (){
    let url = document.getElementById("link").value; 
    var result = url.substring(32);
    console.log("helloworld")
    console.log(result)
    console.log(url)

    const variables = [
        { name: 'qDpb_s7XhEU', value: "https://discord.com/channels/906763183228866601/1163033670328786974/116303498888374684" },
        { name: '2cpgDhJgrrc', value: "https://discord.com/channels/906763183228866601/1163033670328786974/1163037471005741107" },
        { name: 'mfFlhYL5TVE', value: "https://discord.com/channels/906763183228866601/1163033670328786974/1163040273971032204" },
        { name: 'variable4', value: 40 },
      ];

      const searchVariable = (name) => variables.find(variable => variable.name === name);
      
      const vaar = searchVariable(result);
      console.log(vaar);


    if(videos.includes(result)){
        window.open(vaar.value, '_blank')
    }

    
}



