export default function find(id, objects) {
  for(var item of objects)     //serching our movie/cast among existing ones
  {
    if(id==item.id)
    {
      return item;
    }
    return null;
  }
}