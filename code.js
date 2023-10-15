const videos = ["qDpb_s7XhEU", "2cpgDhJgrrc", "mfFlhYL5TVE", "v8dTrvVRNWsM", "YFgIjJ2ASLk", "GbbwW3bEhdw", "4BTRCRPhTqw", "W_j-c0bO2cA", "g6OWHxDC7XI"];

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
        { name: 'v8dTrvVRNWsM', value: "https://discord.com/channels/906763183228866601/1163033670328786974/1163040667405144194" },
        { name: 'YFgIjJ2ASLk', value: "https://discord.com/channels/906763183228866601/1163033670328786974/1163040977322266634" },
        { name: 'GbbwW3bEhdw', value: "https://discord.com/channels/906763183228866601/1163033670328786974/1163041571743223919" }, 
        { name: '4BTRCRPhTqw', value: "https://discord.com/channels/906763183228866601/1163033670328786974/1163045112436236379" },
        { name: 'W_j-c0bO2cA', value: "https://discord.com/channels/906763183228866601/1163033670328786974/1163047284037132308" },
        { name: 'g6OWHxDC7XI', value: "https://discord.com/channels/906763183228866601/1163033670328786974/1163051405427351562" },
        { name: 'variable4', value: 40 },
      ];

      const searchVariable = (name) => variables.find(variable => variable.name === name);
      
      const vaar = searchVariable(result);
      console.log(vaar);


    if(videos.includes(result)){
        window.open(vaar.value, '_blank')
    }

    
}



