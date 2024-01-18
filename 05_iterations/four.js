const myobject ={
    js:"javascript",
    cpp : "C++",
    rb:"ruby",
    swift:"swiftmobile"

}

for (const key in myobject) {
    console.log(`${key} is shortcut  for ${myobject[key]}`)
}