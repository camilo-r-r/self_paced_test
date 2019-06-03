
PennController.ResetPrefix(null);

PennController.Sequence( "instructions1", "info1", randomize("items") );

PennController( "instructions1" ,
    newHtml("instructions", "instructions.html")
        .print()
    ,
    newButton("consent button", "weiter")
        .print()
        .wait()
);
PennController( "info1" ,
    newHtml("info", "info2.html")
       .settings.log()
        .print()
    ,
    newButton("info button", "weiter")
        .print()
        .wait( getHtml("info").test.complete())
);

PennController.Template( PennController.GetTable("items.csv"),
                 variable => PennController("items",
        newText("sentence1",variable.first)
            .print()
        ,
        newKey("1","")
            .wait()
        ,
        newText("sentence2", variable.second)
            .print()
        ,
            newKey("2","")
            .wait()
   ,
            newText("sentence3", variable.third)
            .print()
        ,
            newKey("3","")
            .wait()
        ,
        newButton("finish", "That's it!")
            .print()
           .wait()
       ,     
        getText("sentence1")
           .remove()     
       ,      
         getText("sentence2")
           .remove()     
       ,     
         getText("sentence3")
           .remove()  
       ,   
        getButton("finish")
           .remove()  
       ,                 
        newText("pleasewait2", "Please wait 2s.")
          .print()
    ,
        newTimer("wait", 2000)
            .start()
            .wait()
   ,
        getText("pleasewait2")
           .remove()
 ,
        getKey("1").settings.log("all"),
        getKey("2").settings.log("all"),
        getKey("3").settings.log("all"),
)
                                          .log( "item" , variable.item )
    );
