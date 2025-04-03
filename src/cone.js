/**
 * Lớp đại diện cho một hình nón.
 */
function Cone(radius, height) {
  const PI = Math.PI;
  
  /**
   * Bán kính đáy hình nón.
   * @type {number}
   */
  this.radius = radius;
  
  /**
   * Chiều cao của hình nón.
   * @type {number}
   */
  this.height = height;

  /**
   * Kiểm tra xem các tham số của hình nón có hợp lệ không.
   * @returns {boolean} Trả về `true` nếu hợp lệ, ngược lại trả về `false`.
   */
  this.isValid = function() {
    return !(isNaN(this.radius) || isNaN(this.height) || this.radius <= 0 || this.height <= 0);
  };

  /**
   * Tính độ dài đường sinh của hình nón.
   * @returns {number} Độ dài đường sinh, hoặc `NaN` nếu giá trị không hợp lệ.
   */
  this.slantHeight = function() {
    return this.isValid() ? Math.sqrt(this.radius * this.radius + this.height * this.height) : NaN;
  };

  /**
   * Tính diện tích xung quanh của hình nón.
   * @returns {number} Diện tích xung quanh, hoặc `NaN` nếu giá trị không hợp lệ.
   */
  this.lateralSurfaceArea = function() {
    return this.isValid() ? PI * this.radius * this.slantHeight() : NaN;
  };

  /**
   * Tính diện tích đáy của hình nón.
   * @returns {number} Diện tích đáy, hoặc `NaN` nếu giá trị không hợp lệ.
   */
  this.baseArea = function() {
    return this.isValid() ? PI * this.radius * this.radius : NaN;
  };

  /**
   * Tính tổng diện tích của hình nón (diện tích toàn phần).
   * @returns {number} Tổng diện tích, hoặc `NaN` nếu giá trị không hợp lệ.
   */
  this.totalSurfaceArea = function() {
    return this.isValid() ? this.lateralSurfaceArea() + this.baseArea() : NaN;
  };

  /**
   * Tính thể tích của hình nón.
   * @returns {number} Thể tích, hoặc `NaN` nếu giá trị không hợp lệ.
   */
  this.volume = function() {
    return this.isValid() ? (1 / 3) * PI * this.radius * this.radius * this.height : NaN;
  };
}


module.exports = Cone;