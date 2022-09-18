let main = $(".main");
let taskAdder = $(".add-task");
let taskCount = 0;

taskAdder.click(function() {
    taskCount++;
    let taskDiv = $("<div></div>");
    taskDiv.addClass("tile task"+taskCount);
    taskDiv.html("<p class='heading'>Your Title Here</p> <p class='subtext'>Blah Blah Blah</p> <button class='mark-done-task'><i class='fa-solid fa-check'></i></button> <button class='delete-task'><i class='fa-solid fa-trash-can'></i></button>");
    main.append(taskDiv);

    $(".delete-task").click(function(event) {
        event.remove();
    });

    $(".mark-done-task").click(function() {
        $(".fa-check").css("background", "rgb(98, 241, 90)");
        $(this.parentElement).addClass("done-task");
    });
})