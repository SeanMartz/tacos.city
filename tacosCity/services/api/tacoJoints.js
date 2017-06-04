api = {
  getTacoJoints() {
   return fetch("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=41.4850764,-81.8067574&radius=500&type=restaurant&keyword=taco&key=AIzaSyBAOx52Kz6e3JyYmGckB_I5bUJ2qHquxME", {method: "GET"})
.then((response) => response.json())
.then((responseData) => {
    return responseData;
});
   
  // var q =  [
  //     {
  //       id: 1,
  //       name: 'Taco City',
  //       hours: {
  //           openNow: false,
  //           mon: '',
  //           tue: ''
  //       },
  //       location: {
  //         address: {
  //           name: 'Lake High School Standium',
  //           street: '658 Market Ave N',
  //           city: 'Uniontown',
  //           state: 'OH',
  //           zip: '44685',
  //         },
  //         lat: 40.957681,
  //         long: -81.354747,
  //       },
  //     },
  //     {
  //       id: 2,
  //       name: 'Taco Town',
  //       eventDate: 'Tomorrow at 10am',
  //       location: {
  //         address: {
  //           name: 'Lake High School Standium',
  //           street: '658 Market Ave N',
  //           city: 'Uniontown',
  //           state: 'OH',
  //           zip: '44685',
  //         },
  //         lat: 40.957681,
  //         long: -81.354747,
  //       },
  //     },{
  //       id: 3,
  //       name: 'Taco-Paco',
  //       eventDate: 'Tomorrow at 10am',
  //       location: {
  //         address: {
  //           name: 'Lake High School Standium',
  //           street: '658 Market Ave N',
  //           city: 'Uniontown',
  //           state: 'OH',
  //           zip: '44685',
  //         },
  //         lat: 40.957681,
  //         long: -81.354747,
  //       },
  //     }
  //   ]
  },


}



export default api
