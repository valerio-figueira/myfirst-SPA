/*
CLIENT-SIDE ROUTER

IT'LL LOAD THE CONTENTS OF DASHBOARD, POSTS, OR SETTINGS, INSIDE THIS METHOD
*/

const router = async () => {
    const routes = [
        
        //THE ROUTE PATH OF THE WEB PAGE
        {
            path: "/", view: () => console.log("Viewing Dashboard")
        },
        {
            path: "/posts", view: () => console.log("Viewing Posts")
        },
        {
            path: "/settings", view: () => console.log("Viewing Settings")
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
            }
        }
    );
    
    //This is going to find the true object (the current path)
    let match = potentialMatches.findIndex(potentialMatch => potentialMatch.isMatch);

    console.log(potentialMatches);
}

document.addEventListener("DOMContentLoaded", () => {
    router();
})