const apiKey = 'Kr4LTNrlQAGr6n4R6mou9Hflrm7gETl_3iRxijlvExdJodXzH52c0kkBa0skVftOrdjqqOcI8yxNugJjmARcX28AtutLsZ4PhcFKhS56HqU4gf5tj6g_bCF8RI-oW3Yx'
const Yelp = {
  search(term,location,sortBy) {return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers:{Authorization:`Bearer ${apiKey}`}
    }).then(response=>{
      return response.json();
    }).then(jsonResponse=>{
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id:business.id,
          imageSrc:business.image_url,
          name:business.name,
          address:business.location.address1,
          city:business.location.city,
          state:business.location.state,
          zipCode:business.location.zipcode,
          category:business.categories[0].title,
          rating:business.rating,
          reviewCount:business.review_count
        })
      )}console.log('error')
  })
}
}
export default Yelp
