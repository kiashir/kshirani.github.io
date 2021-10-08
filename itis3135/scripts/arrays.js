
var person = ["Arthur Callahan", "Christie Marshall", "Ewen Booth" , "Francisco Brock", "Jeremy Horn", "Kirsten Webb", "Mitchell Hughes"];
var salary = [7, 8, 3.5, 4.5, 5.5, 7, 6.5];

function guide(){
    alert("First Select an employee's name from the drop down list and then enter monthly salary (1-10) in thousands"+ 
    " in the salary input box then click on 'Add/Change Salary' to add or change the selected employee's salary.\n"+
    "Additional Tips: \n"+
    "-Click on 'Add New Employee' to add a new employee name to the drop down list.\n"+
    "-Click on 'Display Results to view the updated result after each change.\n"+
    "-Click on 'Display Salaries' to view the updated salary table after each change.");
}

//for this addEmployee function--Help from: https://1bestcsharp.blogspot.com/2017/03/javascript-add-options-to-select-from-input-text.html
function addEmployee()
{
    var select = document.getElementById("employee"),
        newPerson = prompt("Enter new employee's name: "),
        newOption = document.createElement("OPTION"),
        newOptionVal = document.createTextNode(newPerson);
    if (newPerson === "") {
            // If user pressed OK, but the input field is empty.
            alert("No employee was added.");
    } else if (newPerson) {
            // If user entered something and hit OK button.
            newOption.appendChild(newOptionVal);
            select.insertBefore(newOption,select.eighthChild);
            person.push(newPerson);
            alert("Employee successfully added to drop down lis!");
    } else {
            // If user hit cancel button.
            alert("No employee was added.");
    }
}

function addSalary(){
    var employee = document.getElementById("employee").value;
    var newSalary = document.getElementById("salary").value;

    if(newSalary<1 || newSalary>10 || Number.isNaN(newSalary) == true ){
        alert("You must enter a valid number!")
    }
    else{
        newSalary = parseFloat(newSalary);
        //salary.push(salary);
        if(person.includes(employee)){
            var i =  person.indexOf(employee);
            salary[i] = newSalary;
        }
    }

}

function displayResults(){
    
    var average =0;
    var total =0;
    var highest =0;

    for(i=0; i<salary.length;i++){
        
            total += salary[i];     
    }

    if(isNaN(total)==false){

    average = (total/salary.length).toFixed(2);
    //source for Math.max.apply: https://stackoverflow.com/questions/21255138/how-does-the-math-max-apply-work
    highest = Math.max.apply(null, salary);//.toFixed(2);
    //
    total = total;//.toFixed(2);
    
    document.getElementById("results").innerHTML = "<h2>Results: </h2>" + "<p> Average Salary is: </p>" + "$ "+ average + "k/month" 
    + "<p>Highest salary is: </p>" +"$ " + highest + "k/month"+ "<p>Total of all Salaries: </p>" + "$ " + total + "k/month";
    }else{
        alert("You must first enter salary for all new employees to see the updated result!!!")
    }
        
}

function displaySalary(){
    var salaryTable = "";
    salaryTable += "<tr><th>Name</th> <th>Salary</th></tr>"

    for(i=0;i<salary.length;i++){
        //Recent Change
        if (typeof salary[i] == "undefined"){
            salaryTable +="<tr><td>" + person[i] + "</td><td>$ " + "--"+"k/month </td></tr>";
        }
        //
        else{
        salaryTable +="<tr><td>" + person[i] + "</td><td>$ " + salary[i]+"k/month </td></tr>";}
    }

    document.getElementById("results_table").innerHTML = "<h2>Monthly Salaries</h2>" + salaryTable;

}