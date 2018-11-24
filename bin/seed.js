const fs = require('fs')
const {db, Table} = require('../server/db');


const seed = async () => {
    await db.sync({force: true})

    const Luke = await Table.create({name:'Luke', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet velit placerat, commodo odio a, accumsan tellus. Proin dapibus tellus vel erat pellentesque fringilla. Etiam ac rhoncus eros. Phasellus consectetur enim sed sodales vulputate. Praesent in risus erat. Nullam ultrices justo sit amet tortor suscipit, at sodales augue aliquam. Nulla in nisl dictum, convallis quam ut, ullamcorper tellus. Nullam maximus vehicula vulputate. Integer congue sit amet augue non fermentum. Pellentesque malesuada elit ut nulla gravida finibus. Etiam est turpis, imperdiet quis finibus in, placerat non sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'});
    const Thomas = await Table.create({name:'Thomas', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet velit placerat, commodo odio a, accumsan tellus. Proin dapibus tellus vel erat pellentesque fringilla. Etiam ac rhoncus eros. Phasellus consectetur enim sed sodales vulputate. Praesent in risus erat. Nullam ultrices justo sit amet tortor suscipit, at sodales augue aliquam. Nulla in nisl dictum, convallis quam ut, ullamcorper tellus. Nullam maximus vehicula vulputate. Integer congue sit amet augue non fermentum. Pellentesque malesuada elit ut nulla gravida finibus. Etiam est turpis, imperdiet quis finibus in, placerat non sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'});
    const Frankie = await Table.create({name:'Frankie', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet velit placerat, commodo odio a, accumsan tellus. Proin dapibus tellus vel erat pellentesque fringilla. Etiam ac rhoncus eros. Phasellus consectetur enim sed sodales vulputate. Praesent in risus erat. Nullam ultrices justo sit amet tortor suscipit, at sodales augue aliquam. Nulla in nisl dictum, convallis quam ut, ullamcorper tellus. Nullam maximus vehicula vulputate. Integer congue sit amet augue non fermentum. Pellentesque malesuada elit ut nulla gravida finibus. Etiam est turpis, imperdiet quis finibus in, placerat non sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'});
    const Ren = await Table.create({name:'Ren',content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet velit placerat, commodo odio a, accumsan tellus. Proin dapibus tellus vel erat pellentesque fringilla. Etiam ac rhoncus eros. Phasellus consectetur enim sed sodales vulputate. Praesent in risus erat. Nullam ultrices justo sit amet tortor suscipit, at sodales augue aliquam. Nulla in nisl dictum, convallis quam ut, ullamcorper tellus. Nullam maximus vehicula vulputate. Integer congue sit amet augue non fermentum. Pellentesque malesuada elit ut nulla gravida finibus. Etiam est turpis, imperdiet quis finibus in, placerat non sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'});

    db.close()
    console.log(`
  
      Seeding successful!
      furFun is now ready to rock!
  
    `)
  }

  seed().catch(err => {
    db.close()
    console.log(`
  
      Error seeding:
  
      ${err.message}
  
      ${err.stack}
  
    `)
  })
  