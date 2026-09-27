$(document).ready(function () {
    function addTask() {
        const taskText = $("#taskInput").val().trim();

        if (taskText !== "") {
            const $li = $("<li>").addClass("list-group-item d-flex justify-content-between align-items-center");
            const $textSpan = $("<span>").addClass("task-text me-2").text(taskText);
            const $deleteBtn = $("<button>").addClass("btn btn-danger btn-sm removeTask").text("Видалити");

            $li.append($textSpan, $deleteBtn);
            $("#taskList").append($li);
            $("#taskInput").val("").focus();
        }
    }

    $("#addTask").on("click", addTask);

    $("#taskInput").on("keydown", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    $("#taskList").on("click", ".removeTask", function () {
        $(this).closest("li").remove();
    });
});