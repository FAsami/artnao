import { Notice } from '@/interfaces/notification'

const staticNotices: Notice[] = [
  {
    id: '1',
    type: 'notification',
    title: 'New Comment on your Post',
    avatar: 'https://via.placeholder.com/40',
    datetime: '2024-09-01 12:00',
    read: false
  },
  {
    id: '2',
    type: 'notification',
    title: 'New Like on your Photo',
    avatar: 'https://via.placeholder.com/40',
    datetime: '2024-09-02 15:30',
    read: true
  },
  {
    id: '3',
    type: 'message',
    title: 'System Update Available',
    avatar: 'https://via.placeholder.com/40',
    datetime: '2024-09-02 10:00',
    description: 'A new system update is available. Click to download.',
    clickClose: true,
    read: false
  },
  {
    id: '4',
    type: 'message',
    title: 'New Private Message from John',
    avatar: 'https://via.placeholder.com/40',
    datetime: '2024-09-03 14:00',
    description: 'Hey! Just wanted to check in and say hello!',
    clickClose: false,
    read: true
  },
  {
    id: '5',
    type: 'event',
    title: 'Team Meeting',
    description: 'There is a team meeting at 3 PM.',
    extra: 'Today',
    status: 'urgent'
  },
  {
    id: '6',
    type: 'event',
    title: 'Project Deadline',
    description: 'The project deadline is approaching.',
    extra: 'Due Soon',
    status: 'processing'
  }
]

export default staticNotices
