let main = $(".main");
let taskAdder = $(".add-task");
let count = 0;

taskAdder.click(function() {
    count++;
    let taskDiv = $("<div></div>");
    taskDiv.addClass("tile task"+count);
    taskDiv.html("<p class='heading'>Your Title Here</p> <p class='subtext'>Blah Blah Blah</p> <button class='delete-task'>-</button>");
    main.prepend(taskDiv);

    $(".delete-task").click(function(event) {
        event.remove();
    })
})

