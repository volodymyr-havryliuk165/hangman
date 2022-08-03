export default function showNotification(toggle) {
  toggle(true)
  setTimeout(() => {
    toggle(false);
  }, 2000);
}