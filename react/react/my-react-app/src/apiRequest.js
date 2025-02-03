
const apiRequest = async({APIURL="",optionObj=null,errmsg=null}) => {
  try
  {
    const responce=await fetch(APIURL,optionObj)
    if(!responce.ok)
        throw Error("please to reload fix the problem")
  }
  catch(err)
  {
    errmsg=err.message
  }
  finally{
    return errmsg
  }
}

export default apiRequest