document.addEventListener('DOMContentLoaded',function(){
    const searchbuttan=document.getElementById('search-bta');
    const usernameinput=document.getElementById('username');    
    const statuscontaner=document.getElementById('status-container');
    const hardcircal=document.querySelector('#hard-progres');
    const mediamcircal=document.querySelector('#mediam-progres');
    const easycircal=document.querySelector('#easy-progres');
    const easylable=document.getElementById('easy-progres');
    const mediamlable=document.getElementById('mediam-progres');
    const hardlable=document.getElementById('hard-progres');
    const lowlable=document.getElementById('low');
    const midlable=document.getElementById('mid');
    const highlable=document.getElementById('high');
    
    const cardstatuscontainor=document.querySelector('.staus-card');
    
    function validusername(username){
        
        if(username.trim()===""){
            alert("username shoud not be empty");
            return false;
        }
        const Regex = /^[a-zA-Z0-9_]{3,16}$/;
        const ismatch=Regex.test(username);
        if(!ismatch){
            alert("enter correct user name");
        }
        return ismatch; 
    }
    async function fetchUserDetails(username){
        
        try{
            searchbuttan.textContent='serching.....';
            searchbuttan.disabled=true;
            const proxyurl='https://cors-anywhere.herokuapp.com/'
            const targeturl='https://leetcode.com/graphql/'
            const myheader= new Headers();
            myheader.append("content-type", "application/json");
            const graphql = JSON.stringify({
    query: `
        query userSessionProgress($username: String!) {
            allQuestionsCount {
                difficulty
                count
            }

            matchedUser(username: $username) {
                submitStats {
                    acSubmissionNum {
                        difficulty
                        count
                    }
                    totalSubmissionNum {
                        difficulty
                        count
                    }
                }
            }
        }
    `,
    variables: {
        username: `${username}`
    }
});
        const requestOptions = {
    method: "POST",
    headers: myheader,
    body: graphql,
    redirect: "follow"
};

            const responce = await fetch(proxyurl+
      targeturl,
    requestOptions
);
//direct data factch using this api with out qury
// const url = `https://alfa-leetcode-api.onrender.com/${username}/solved/`;

// const responce = await fetch(url);

            if(!responce.ok){
                throw new Error("unable to fetch data");
                
            }
            const data=await responce.json();
            console.log("logging data:",data);

            displayuserdata(data);
        }
        catch(error){
            // throw new Error('unable to fatch data');
            statuscontaner.innerHTML=`<P>${error}</p>`
        }
        finally{
            searchbuttan.textContent='Search';
            searchbuttan.disabled=false;
        }
    }
    function updateprogress(solve,total,lable,circal){
        const progres=(solve/total)*100;
        circal.style.setProperty("--progress-degree", `${progres}%`);
        lable.textContent= `${solve}/${total}`;
        
        
    }
    function displayuserdata(pdata){
        //totalqustion
        const totalquestion=pdata.data.allQuestionsCount[0].count;
        const totaleasyquestion=pdata.data.allQuestionsCount[1].count;
        const totalmediamquestion=pdata.data.allQuestionsCount[2].count;
        const totalhardquestion=pdata.data.allQuestionsCount[3].count;
        //solvequstion
        const solvequestion=pdata.data.matchedUser.submitStats.acSubmissionNum[0].count;
        const solveeasyquestion=pdata.data.matchedUser.submitStats.acSubmissionNum[1].count;
        const solvemediamquestion=pdata.data.matchedUser.submitStats.acSubmissionNum[2].count;
        const solvehardquestion=pdata.data.matchedUser.submitStats.acSubmissionNum[3].count;
        //call update progress
        updateprogress(solveeasyquestion,totaleasyquestion,lowlable,easycircal);
        updateprogress(solvehardquestion,totalhardquestion,highlable,hardcircal);
        updateprogress(solvemediamquestion,totalmediamquestion,midlable,mediamcircal);

        const carddata = [
            {lable: "Overall Submissions", value:pdata.data.matchedUser.submitStats.totalSubmissionNum[0].count },
            {lable: "Overall Easy Submissions", value:pdata.data.matchedUser.submitStats.totalSubmissionNum[1].count },
            {lable: "Overall Medium Submissions", value:pdata.data.matchedUser.submitStats.totalSubmissionNum[2].count },
            {lable: "Overall Hard Submissions", value:pdata.data.matchedUser.submitStats.totalSubmissionNum[3].count },
        ];
    cardstatuscontainor.innerHTML=carddata.map(
        data=>
            `
            <div class="card">
            <h3>${data.lable}</h3>
            <p>${data.value}</p>
            </div>
            `
        
    ).join("")
    }
    
    searchbuttan.addEventListener('click', function(){
        const username=usernameinput.value;
        console.log("user name is=",username);
        if(validusername(username)){
             fetchUserDetails(username);
            
        }
        
    })
    
})