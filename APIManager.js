//This is the class that will manage all your APIs

class APIManager {
  constructor() {
      this.data = {}
  }

  geenrateRandomPeople() {
    let length = 7
    $.ajax({
      method: "GET",
      url: `https://randomuser.me/api/?results=${length}`,
      success: (response) => {
        let users = response.results.map((p) => {
          return {
            photo: p.picture.medium,
            firstName: p.name.first,
            lastName: p.name.last,
            city: p.location.city,
            state: p.location.state,
          };
        });

        this.data.mainUser = users[0];
        this.data.friends = users.splice(1, 6);
      },
      error: function () {
        console.log("error");
      },
    });
  }

  generateQuote() {
    $.ajax({
      method: "GET",
      url: "https://api.kanye.rest",
      success: (response) => {
        // return {quote: response.quote}

        this.data.quote = response.quote
      },
      // error: 
    })
  }
}