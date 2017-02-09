(function () {
    var EmployeesController = function ($scope) {
        var employees = function (serviceResp) {
            $scope.Employees = serviceResp.data;
        };
        var errorDetails = function (serviceResp) {
            $scope.Error = "Something went wrong ??";
        };
        $http.get("http://localhost:24716/api/ptemployees")
            .then(employees, errorDetails);
        $scope.Title = "Employee Details Page";
        $scope.Employees = employees;
    };
    app.controller("EmployeesController", EmployeesController);
}());