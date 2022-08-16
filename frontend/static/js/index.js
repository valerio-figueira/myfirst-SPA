import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";


//This function will update the contents inside the page without refreshing it
const navigateTo = url => {
    history.pushState(null, null, url);
    //router method will process the new history entry
    router();
};


/*
CLIENT-SIDE ROUTER

IT'LL LOAD THE CONTENTS OF DASHBOARD, POSTS, OR SETTINGS, INSIDE THIS METHOD
*/

const router = async () => {
    const routes = [
        
        //THE ROUTE/PATH OF THE WEB PAGE
        {
            path: "/", view: Dashboard
        },
        {
            path: "/posts", view: Posts
        },
        {
            path: "/settings", view: Settings
        },
        
    ];

    // Test each route for potential match.
    // It'll loop through each of the three route and return a new object for each route as true or false, depending on which route the browser is printing currently.
    // The method .map return a new array of objects as true or false.
    const potentialMatches = routes.map(
        route => {
            return {
                route: route,
                isMatch: location.pathname === route.path
            };
        }
    );
    
    //This is going to find the true object (the current path)
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if(!match){
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();

    console.log(match.route.view());
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", event => {
        if(event.target.matches("[data-link]")){
            //prevent to refresh the page and running navigateTo() function after
            event.preventDefault();
            //get the atribute href from the target (link)
            navigateTo(event.target.href);
        }
    });

    router();
});