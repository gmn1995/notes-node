console.log('Starting app.js');

const fs=require('fs');
const notes=require('./notes.js');
const yargs=require('yargs')
const _=require('lodash');
const titleOptions={
  describe:"note title",
  demand:true,
  alias:'t'
}
const bodyOptions={
  describe:"note body",
  demand:true,
  alias:'t'
}
const argv=yargs.command(
  "add","add new note",{
    title:titleOptions,
    body:bodyOptions
  }
)
.command("list","listAllNodes")
.command("remove","remove a note",{
  title:titleOptions
})
.help().argv;
var command=argv._[0];

console.log('yargs',argv);
if(command==='add')
{

  var note=notes.addNote(argv.title,argv.body);
  if(note){
    console.log("created");
    console.log("----------------");
    console.log(`title: ${note.title}`);
    console.log(`body: ${note.body}`);
  }
  else {
    console.log("title taken");
  }
}
else if (command=='list') {
  var allNotes=notes.getAll();
  console.log(`Printing${allNotes.length} note(s)`);
  allNotes.forEach(function(){
    notes.logNote(note);
  })
}
else if (command=='read') {
  var titles=notes.getNote(argv.title);
  var message=(titles)?titles.body:"not found";
  notes.logNote(message);
}
else if (command='remove') {
   var noteRemoved=notes.removeNote(argv.title);
   var message=noteRemoved?"removed":"notremoved";
   console.log(message);
}
else {
  console.log('invalid commmand');

}
