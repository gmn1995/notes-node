console.log('starting notes.js');
const fs=require('fs');

var fetchNotes=function(){
  try {
    var notesString=fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  }
  catch(e){
    return [];
  };

}

var saveNotes=function(notes){
fs.writeFileSync("notes-data.json",JSON.stringify(notes));

}

var addNote=function(title,body){
var notes=fetchNotes();
var note={
  title,
  body,
  };

  var duplicateNotes=notes.filter((note)=>note.title===title);
  if(duplicateNotes.length==0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }

};
 var getAll=function(){
   return fetchNotes();
 }
 var getNote=function(title){
   var allnotes=fetchNotes();
   var wantedNotes=allnotes.filter((note)=>note.title===title);
   return wantedNotes[0];

 }
 var removeNote=function(title){
   var notes=fetchNotes();
   var toSave=notes.filter((note)=>note.title!==title);
   saveNotes(toSave);
   return notes.length!==toSave.length;
 }
 var logNote=function(note){
   debugger;
   console.log("--------");
   console.log(`Title: ${note.title} `);
   console.log(`Body: ${note.body}`);
 }
module.exports={
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
}
