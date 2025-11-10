export function toSlug(str: string): string {
  return str
    .normalize("NFD")                     // tách dấu khỏi ký tự gốc (đầm -> d + ̂)
    .replace(/[\u0300-\u036f]/g, "")      // xóa dấu tiếng Việt
    .toLowerCase()                        // chuyển thường
    .trim()                               // bỏ khoảng trắng 2 đầu
    .replace(/[^a-z0-9\s-]/g, "")         // bỏ ký tự đặc biệt
    .replace(/\s+/g, "-")                 // thay khoảng trắng bằng dấu -
    .replace(/-+/g, "-");                 // bỏ dấu - thừa
}
