
export async function fetchRecipes(filter) {
  const { query, limit } = filter;
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}`;
  console.log(url); 
  const response = await fetch(url);
  const data = await response.json();
  return data?.hits?.slice(0, limit);
}

export async function fetchRecipe(id) {
  const url = `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}`;
  console.log(url); 
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
  
