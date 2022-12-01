$(document).ready(function() {
    var count = 0;
        // Clicking on the add button in the website creates a new listing and inserts string in the input field to the new task.
        $(".add").click(function() {
            var inputval = $(".form-control").val();
                // Proceed to creation if input field is not empty.
            if (inputval != '') {
                count ++;
                $(".todo-list").append('<li><div class="left-cont"><input type="checkbox" id="check-'+count+'" name=""><label for="check-'+count+'"></label><span>'+inputval+'</span></div><span class="remove"> <i class="material-icons">delete</i> </span></li>');
            } else {
                // Alert if input field is empty.
                alert("Input Field Is Empty. Add Text To Create A New Task!")
            }
                // Reset input field back to empty.
            $(".form-control").val('');
        })

        // Add functions to check buttons
        $(document).on('change', 'input[type="checkbox"]', function() {
            
            if ($(this).is(':checked')) {
                $(this).closest("li").children(".remove").addClass("active");
            } else {
                $(this).closest("li").children(".remove").removeClass("active");
            }
        })

        // Add function to remove button
        $(document).on('click', '.remove', function() {
            $(this).parent().remove();
        })
    });
