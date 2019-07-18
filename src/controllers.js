const search = async (ctx) => {
  await ctx.render('index', {
    groupSelect: [{ label: "location", value: "", hasMarker: true },
    { label: "CATEGORY", value: "Category", hasMarker: false },
    { label: "SERVICE", value: "servise", hasMarker: false },
    { label: "SUBCATEGORY", value: "Subcategory", hasMarker: false }],
    resSearch: [{ path: "../img/richardTomson_1.png" },
    { path: "/img/rt_2.png" }, { path: "/img/rt_3.png" },
    { path: "/img/rt_4.png" }, { path: "/img/rt_5.png" },
    { path: "/img/rt_6.png" }, { path: "/img/richardTomson_1.png" },
    { path: "/img/richardTomson_1.png" }]
  });
};

const profile_1 = async (ctx)=>{
  await ctx.render('profile_1', {
    userName: 'Faruh Bernandez'
  })
};
const profile_2 = async (ctx)=>{
  await ctx.render('profile_2', {
    userName: 'Faruh Bernandez'
  })
};

const pass_rec = async (ctx)=>{
  await ctx.render('Password _recovery',{
    action:'Enter your e-mail to reset your password'
  })
};

const sigh_up = async (ctx)=>{
  await ctx.render('sigh_up',{
    question:'Already have an account?'
  })
};

const sigh_in = async (ctx)=>{
  await ctx.render('sigh_in',{
    question:'Do not have an account?'
  })
};

const chat = async (ctx)=>{
  await ctx.render('chat')
}


module.exports={
  search,
  profile_1,
  profile_2,
  pass_rec,
  sigh_up,
  sigh_in,
  chat
}