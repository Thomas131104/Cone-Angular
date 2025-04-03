angular.module('coneApp', [])
  .controller('ConeController', function($scope) {
    $scope.radius = 0;
    $scope.height = 0;

    // Tạo một object hình nón với các phép tính
    $scope.updateCone = function() {
      $scope.cone = new Cone($scope.radius, $scope.height);
    };

    $scope.slantHeight = function() {
      return $scope.cone ? $scope.cone.slantHeight() : NaN;
    };

    $scope.lateralSurfaceArea = function() {
      return $scope.cone ? $scope.cone.lateralSurfaceArea() : NaN;
    };

    $scope.baseArea = function() {
      return $scope.cone ? $scope.cone.baseArea() : NaN;
    };

    $scope.totalSurfaceArea = function() {
      return $scope.cone ? $scope.cone.totalSurfaceArea() : NaN;
    };

    $scope.volume = function() {
      return $scope.cone ? $scope.cone.volume() : NaN;
    };

    // Khởi tạo khi load trang
    $scope.updateCone();
  });
