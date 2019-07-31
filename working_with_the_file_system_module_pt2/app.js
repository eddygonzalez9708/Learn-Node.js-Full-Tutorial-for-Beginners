const fs = require('fs')

// fs.mkdir('tutorial', (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('Folder successfully created')
//     // fs.rmdir('tutorial', (err) => {
//     //   if (err) {
//     //     console.log(err)
//     //   } else {
//     //     console.log('Successfully deleted the folder.')
//     //   }
//     // })

//     fs.writeFile('./tutorial/example.txt', '123', (err) => {
//       if (err) {
//         console.log(err)
//       } else {
//         console.log('Successfully created file in the folder.')
//       }
//     })
//   }
// })

// fs.unlink('./tutorial/example.txt', (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('Successfully deleted the file.')
//     fs.rmdir('tutorial', (err) => {
//       if (err) {
//         console.log(err)
//       } else {
//         console.log('Successfully deleted the folder.')
//       }
//    })
//   }
// })

fs.readdir('new_folder', (err, files) => {
  if (err) {
    console.log(err)
  } else {
    console.log(files)
    for (let file of files) {
      fs.unlink('./new_folder/' + file, (err) => {
        if (err) {
          console.log
        } else {
          console.log('Successfully deleted file.')
        }
      })
    }
  }
})