function toDate(timestamp) {
  return timestamp instanceof Date ? timestamp : new Date(timestamp);
}

export function formatTime(timestamp) {
  return toDate(timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function formatDate(timestamp) {
  return toDate(timestamp).toLocaleDateString([], {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function formatDateTime(timestamp) {
  return `${formatDate(timestamp)} • ${formatTime(timestamp)}`;
}

export function getRelativeTime(timestamp) {
  const diffMinutes = Math.round((Date.now() - toDate(timestamp).getTime()) / 60000);

  if (diffMinutes < 1) return "Just now";
  if (diffMinutes < 60) return `${diffMinutes}m ago`;

  const diffHours = Math.round(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours}h ago`;

  return `${Math.round(diffHours / 24)}d ago`;
}
