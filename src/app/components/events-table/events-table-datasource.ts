export interface EventsTableItem {
  position: number;
  icon: string;
  color: string;
  decoy: string;
  time: string;
  source: string;
  processName: string;
  details: string;
}

const eventDate = new Date();

export const EXAMPLE_DATA: EventsTableItem[] = [
  {
    position: 1,
    icon: 'file_copy',
    color: '#ab854c',
    decoy: 'win7-decoy-1',
    time: new Date(+eventDate + 234234).toLocaleString(),
    source: '',
    processName: 'c:\\windows\\regedit.exe',
    details: 'C:\\Windows\\regedit.exe'
  },

  {
    position: 2,
    icon: 'remove_from_queue',
    color: '#3a9aca',
    decoy: 'win12-decoy-2',
    time: new Date(+eventDate + 234234).toLocaleString(),
    source: '',
    processName: 'c:\\windows\\system32.dllhost.exe',
    details: 'C:\\Windows\\system32.dllhost.exe'
  },

  {
    position: 3,
    icon: 'file_copy',
    color: '#ff8500',
    decoy: 'win7-decoy-3',
    time: new Date(+eventDate + 234234).toLocaleString(),
    source: '',
    processName: 'c:\\windows\\regedit.exe',
    details: 'C:\\Windows\\regedit.exe'
  },

  {
    position: 4,
    icon: 'warning',
    color: '#ab854c',
    decoy: 'win12-decoy-4',
    time: new Date(+eventDate + 21213123).toLocaleString(),
    source: '',
    processName: 'c:\\windows\\explorer.exe',
    details: 'C:\\Windows\\explorer.exe'
  },

  {
    position: 5,
    icon: 'file_copy',
    color: '#ff8500',
    decoy: 'win7-decoy-5',
    time: new Date(+eventDate + 12321321).toLocaleString(),
    source: '',
    processName: 'c:\\windows\\regedit.exe',
    details: 'C:\\Windows\\regedit.exe'
  },
  {
    position: 6,
    icon: 'file_copy',
    color: '#ff8500',
    decoy: 'win12-decoy-7',
    time: new Date(+eventDate + 123255).toLocaleString(),
    source: '',
    processName: 'c:\\windows\\rexplorer.exe',
    details: 'C:\\Windows\\rexplorer.exe.exe'
  },
  {
    position: 7,
    icon: 'remove_from_queue',
    color: '#ff8500',
    decoy: 'win12-decoy-8',
    time: new Date(+eventDate + 123244).toLocaleString(),
    source: '',
    processName: 'c:\\windows\\explorer.exe',
    details: 'C:\\Windows\\explorer.exe'
  },
  {
    position: 8,
    icon: 'remove_from_queue',
    color: '#ab854c',
    decoy: 'win7-decoy-1',
    time: new Date(+eventDate + 123556).toLocaleString(),
    source: '',
    processName: 'c:\\windows\\regedit.exe',
    details: 'C:\\Windows\\regedit.exe'
  },

  {
    position: 9,
    icon: 'file_copy',
    color: '#3a9aca',
    decoy: 'win12-decoy-2',
    time: new Date(+eventDate + 123455).toLocaleString(),
    source: '',
    processName: 'c:\\windows\\system32.dllhost.exe',
    details: 'C:\\Windows\\system32.dllhost.exe'
  },
  {
    position: 10,
    icon: 'home',
    color: '#ff8500',
    decoy: 'win7-decoy-3',
    time: new Date(+eventDate + 45677).toLocaleString(),
    source: '',
    processName: 'c:\\windows\\regedit.exe',
    details: 'C:\\Windows\\regedit.exe'
  },
  {
    position: 11,
    icon: 'home',
    color: '#ab854c',
    decoy: 'win12-decoy-4',
    time: new Date(+eventDate + 566868).toLocaleString(),
    source: '',
    processName: 'c:\\windows\\explorer.exe',
    details: 'C:\\Windows\\explorer.exe'
  },

  {
    position: 12,
    icon: 'file_copy',
    color: '#ab854c',
    decoy: 'win7-decoy-5',
    time: new Date(+eventDate + 5645645).toLocaleString(),
    source: '',
    processName: 'c:\\windows\\regedit.exe',
    details: 'C:\\Windows\\regedit.exe'
  },

  {
    position: 13,
    icon: 'remove_from_queue',
    color: '#3a9aca',
    decoy: 'win18-decoy-6',
    time: new Date(+eventDate + 34534534).toLocaleString(),
    source: '',
    processName: 'c:\\windows\\system32.dllhost.exe',
    details: 'C:\\Windows\\system32.dllhost.exe'
  },

  {
    position: 14,
    icon: 'web',
    color: '#ff8500',
    decoy: 'win12-decoy-7',
    time: new Date(+eventDate + 345234).toLocaleString(),
    source: '',
    processName: 'c:\\windows\\rexplorer.exe',
    details: 'C:\\Windows\\rexplorer.exe.exe'
  },
  {
    position: 15,
    icon: 'file_copy',
    color: '#ff8500',
    decoy: 'win12-decoy-8',
    time: new Date(+eventDate + 1234).toLocaleString(),
    source: '',
    processName: 'c:\\windows\\explorer.exe',
    details: 'C:\\Windows\\explorer.exe'
  },
  {
    position: 16,
    icon: 'home',
    color: '#ff8500',
    decoy: 'win7-decoy-3',
    time: new Date(+eventDate + 234).toLocaleString(),
    source: '',
    processName: 'c:\\windows\\regedit.exe',
    details: 'C:\\Windows\\regedit.exe'
  },

  {
    position: 17,
    icon: 'home',
    color: '#ab854c',
    decoy: 'win12-decoy-4',
    time: new Date(+eventDate + 234235).toLocaleString(),
    source: '',
    processName: 'c:\\windows\\explorer.exe',
    details: 'C:\\Windows\\explorer.exe'
  },

  {
    position: 18,
    icon: 'file_copy',
    color: '#3a9aca',
    decoy: 'win7-decoy-5',
    time: new Date(+eventDate + 12323).toLocaleString(),
    source: '',
    processName: 'c:\\windows\\regedit.exe',
    details: 'C:\\Windows\\regedit.exe'
  },

  {
    position: 19,
    icon: 'remove_from_queue',
    color: '#ab854c',
    decoy: 'win18-decoy-6',
    time: new Date(+eventDate + 1231232).toLocaleString(),
    source: '',
    processName: 'c:\\windows\\system32.dllhost.exe',
    details: 'C:\\Windows\\system32.dllhost.exe'
  },

  {
    position: 20,
    icon: 'web',
    color: '#ff8500',
    decoy: 'win12-decoy-7',
    time: new Date(+eventDate + 3454543).toLocaleString(),
    source: '',
    processName: 'c:\\windows\\rexplorer.exe',
    details: 'C:\\Windows\\rexplorer.exe.exe'
  },
  {
    position: 21,
    icon: 'file_copy',
    color: '#ff8500',
    decoy: 'win12-decoy-8',
    time: new Date(+eventDate + 5647547).toLocaleString(),
    source: '',
    processName: 'c:\\windows\\explorer.exe',
    details: 'C:\\Windows\\explorer.exe'
  },
  {
    position: 22,
    icon: 'warning',
    color: '#ab854c',
    decoy: 'win12-decoy-4',
    time: new Date(+eventDate + 76878).toLocaleString(),
    source: '',
    processName: 'c:\\windows\\explorer.exe',
    details: 'C:\\Windows\\explorer.exe'
  },

  {
    position: 23,
    icon: 'file_copy',
    color: '#ff8500',
    decoy: 'win7-decoy-5',
    time: new Date(+eventDate + 1002340).toLocaleString(),
    source: '',
    processName: 'c:\\windows\\regedit.exe',
    details: 'C:\\Windows\\regedit.exe'
  },
  {
    position: 24,
    icon: 'remove_from_queue',
    color: '#3a9aca',
    decoy: 'win12-decoy-2',
    time: new Date(+eventDate + 6756756).toLocaleString(),
    source: '',
    processName: 'c:\\windows\\system32.dllhost.exe',
    details: 'C:\\Windows\\system32.dllhost.exe'
  }, {
    position: 25,
    icon: 'remove_from_queue',
    color: '#3a9aca',
    decoy: 'win12-decoy-2',
    time: new Date(+eventDate + 67868).toLocaleString(),
    source: '',
    processName: 'c:\\windows\\system32.dllhost.exe',
    details: 'C:\\Windows\\system32.dllhost.exe'
  }
  ];

export const EXAMPLE_DATA_2: EventsTableItem[] = [
    {
   position: 26,
   icon: 'remove_from_queue',
   color: '#3a9aca',
   decoy: 'win12-decoy-2',
   time: new Date(+eventDate + 7897898).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\system32.dllhost.exe',
   details: 'C:\\Windows\\system32.dllhost.exe'
 },

 {
   position: 27,
   icon: 'warning',
   color: '#ab854c',
   decoy: 'win18-decoy-6',
   time: new Date(+eventDate + 233423).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\system32.dllhost.exe',
   details: 'C:\\Windows\\system32.dllhost.exe'
 },

 {
   position: 28,
   icon: 'file_copy',
   color: '#ff8500',
   decoy: 'win12-decoy-7',
   time: new Date(+eventDate + 234343).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\rexplorer.exe',
   details: 'C:\\Windows\\rexplorer.exe.exe'
 },

 {
   position: 29,
   icon: 'remove_from_queue',
   color: '#ff8500',
   decoy: 'win12-decoy-8',
   time: new Date(+eventDate + 2343243).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\explorer.exe',
   details: 'C:\\Windows\\explorer.exe'
 },
 {
   position: 20,
   icon: 'web',
   color: '#ff8500',
   decoy: 'win12-decoy-7',
   time: new Date(+eventDate + 34435454334).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\rexplorer.exe',
   details: 'C:\\Windows\\rexplorer.exe.exe'
 },
 {
   position: 21,
   icon: 'file_copy',
   color: '#ff8500',
   decoy: 'win12-decoy-8',
   time: new Date(+eventDate + 4354534).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\explorer.exe',
   details: 'C:\\Windows\\explorer.exe'
 },
 {
   position: 22,
   icon: 'warning',
   color: '#ab854c',
   decoy: 'win12-decoy-4',
   time: new Date(+eventDate + 4354445).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\explorer.exe',
   details: 'C:\\Windows\\explorer.exe'
 },

 {
   position: 23,
   icon: 'file_copy',
   color: '#ff8500',
   decoy: 'win7-decoy-5',
   time: new Date(+eventDate + 345343).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\regedit.exe',
   details: 'C:\\Windows\\regedit.exe'
 },
 {
   position: 24,
   icon: 'remove_from_queue',
   color: '#3a9aca',
   decoy: 'win12-decoy-2',
   time: new Date(+eventDate + 3453453).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\system32.dllhost.exe',
   details: 'C:\\Windows\\system32.dllhost.exe'
 }, {
   position: 25,
   icon: 'remove_from_queue',
   color: '#3a9aca',
   decoy: 'win12-decoy-2',
   time: new Date(+eventDate + 23454).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\system32.dllhost.exe',
   details: 'C:\\Windows\\system32.dllhost.exe'
 }, {
   position: 26,
   icon: 'remove_from_queue',
   color: '#3a9aca',
   decoy: 'win12-decoy-2',
   time: new Date(+eventDate + 454564).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\system32.dllhost.exe',
   details: 'C:\\Windows\\system32.dllhost.exe'
 },

 {
   position: 27,
   icon: 'warning',
   color: '#ab854c',
   decoy: 'win18-decoy-6',
   time: new Date(+eventDate + 6345644).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\system32.dllhost.exe',
   details: 'C:\\Windows\\system32.dllhost.exe'
 },

 {
   position: 28,
   icon: 'file_copy',
   color: '#ff8500',
   decoy: 'win12-decoy-7',
   time: new Date(+eventDate + 23456455).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\rexplorer.exe',
   details: 'C:\\Windows\\rexplorer.exe.exe'
 },

 {
   position: 29,
   icon: 'remove_from_queue',
   color: '#ff8500',
   decoy: 'win12-decoy-8',
   time: new Date(+eventDate + 3245645).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\explorer.exe',
   details: 'C:\\Windows\\explorer.exe'
 },
 {
   position: 30,
   icon: 'web',
   color: '#ff8500',
   decoy: 'win12-decoy-7',
   time: new Date(+eventDate + 22234233).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\rexplorer.exe',
   details: 'C:\\Windows\\rexplorer.exe.exe'
 },
 {
   position: 31,
   icon: 'file_copy',
   color: '#ff8500',
   decoy: 'win12-decoy-8',
   time: new Date(+eventDate + 23343535).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\explorer.exe',
   details: 'C:\\Windows\\explorer.exe'
 },
 {
   position: 32,
   icon: 'warning',
   color: '#ab854c',
   decoy: 'win12-decoy-4',
   time: new Date(+eventDate + 1004360).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\explorer.exe',
   details: 'C:\\Windows\\explorer.exe'
 },

 {
   position: 33,
   icon: 'file_copy',
   color: '#ff8500',
   decoy: 'win7-decoy-5',
   time: new Date(+eventDate + 45234534).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\regedit.exe',
   details: 'C:\\Windows\\regedit.exe'
 },
 {
   position: 34,
   icon: 'remove_from_queue',
   color: '#3a9aca',
   decoy: 'win12-decoy-2',
   time: new Date(+eventDate + 143212).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\system32.dllhost.exe',
   details: 'C:\\Windows\\system32.dllhost.exe'
 }, {
   position: 35,
   icon: 'remove_from_queue',
   color: '#3a9aca',
   decoy: 'win12-decoy-2',
   time: new Date(+eventDate + 23433454).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\system32.dllhost.exe',
   details: 'C:\\Windows\\system32.dllhost.exe'
 }, {
   position: 36,
   icon: 'remove_from_queue',
   color: '#3a9aca',
   decoy: 'win12-decoy-2',
   time: new Date(+eventDate + 3223234324).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\system32.dllhost.exe',
   details: 'C:\\Windows\\system32.dllhost.exe'
 },

 {
   position: 37,
   icon: 'warning',
   color: '#ab854c',
   decoy: 'win18-decoy-6',
   time: new Date(+eventDate + 323423424).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\system32.dllhost.exe',
   details: 'C:\\Windows\\system32.dllhost.exe'
 },

 {
   position: 38,
   icon: 'file_copy',
   color: '#ff8500',
   decoy: 'win12-decoy-7',
   time: new Date(+eventDate + 43523).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\rexplorer.exe',
   details: 'C:\\Windows\\rexplorer.exe.exe'
 },

 {
   position: 39,
   icon: 'remove_from_queue',
   color: '#ff8500',
   decoy: 'win12-decoy-8',
   time: new Date(+eventDate + 34523423).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\explorer.exe',
   details: 'C:\\Windows\\explorer.exe'
 },
 {
   position: 30,
   icon: 'web',
   color: '#ff8500',
   decoy: 'win12-decoy-7',
   time: new Date(+eventDate + 1234232).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\rexplorer.exe',
   details: 'C:\\Windows\\rexplorer.exe.exe'
 },
 {
   position: 31,
   icon: 'file_copy',
   color: '#ff8500',
   decoy: 'win12-decoy-8',
   time: new Date(+eventDate + 12342324).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\explorer.exe',
   details: 'C:\\Windows\\explorer.exe'
 },
 {
   position: 32,
   icon: 'warning',
   color: '#ab854c',
   decoy: 'win12-decoy-4',
   time: new Date(+eventDate + 1234224).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\explorer.exe',
   details: 'C:\\Windows\\explorer.exe'
 },

 {
   position: 33,
   icon: 'file_copy',
   color: '#ff8500',
   decoy: 'win7-decoy-5',
   time: new Date(+eventDate + 2532).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\regedit.exe',
   details: 'C:\\Windows\\regedit.exe'
 },
 {
   position: 34,
   icon: 'remove_from_queue',
   color: '#3a9aca',
   decoy: 'win12-decoy-2',
   time: new Date(+eventDate + 34234326).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\system32.dllhost.exe',
   details: 'C:\\Windows\\system32.dllhost.exe'
 }, {
   position: 35,
   icon: 'remove_from_queue',
   color: '#3a9aca',
   decoy: 'win12-decoy-2',
   time: new Date(+eventDate + 65234328).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\system32.dllhost.exe',
   details: 'C:\\Windows\\system32.dllhost.exe'
 }, {
   position: 36,
   icon: 'remove_from_queue',
   color: '#3a9aca',
   decoy: 'win12-decoy-2',
   time: new Date(+eventDate + 762343298).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\system32.dllhost.exe',
   details: 'C:\\Windows\\system32.dllhost.exe'
 },

 {
   position: 37,
   icon: 'warning',
   color: '#ab854c',
   decoy: 'win18-decoy-6',
   time: new Date(+eventDate + 5476).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\system32.dllhost.exe',
   details: 'C:\\Windows\\system32.dllhost.exe'
 },

 {
   position: 38,
   icon: 'file_copy',
   color: '#ff8500',
   decoy: 'win12-decoy-7',
   time: new Date(+eventDate + 25324).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\rexplorer.exe',
   details: 'C:\\Windows\\rexplorer.exe.exe'
 },

 {
   position: 39,
   icon: 'remove_from_queue',
   color: '#ff8500',
   decoy: 'win12-decoy-8',
   time: new Date(+eventDate + 2234233).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\explorer.exe',
   details: 'C:\\Windows\\explorer.exe'
 },
 {
   position: 40,
   icon: 'web',
   color: '#ff8500',
   decoy: 'win12-decoy-7',
   time: new Date(+eventDate + 5685).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\rexplorer.exe',
   details: 'C:\\Windows\\rexplorer.exe.exe'
 },
 {
   position: 41,
   icon: 'file_copy',
   color: '#ff8500',
   decoy: 'win12-decoy-8',
   time: new Date(+eventDate + 34534).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\explorer.exe',
   details: 'C:\\Windows\\explorer.exe'
 },
 {
   position: 42,
   icon: 'warning',
   color: '#ab854c',
   decoy: 'win12-decoy-4',
   time: new Date(+eventDate + 34234235).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\explorer.exe',
   details: 'C:\\Windows\\explorer.exe'
 },

 {
   position: 43,
   icon: 'file_copy',
   color: '#ff8500',
   decoy: 'win7-decoy-5',
   time: new Date(+eventDate + 34234233).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\regedit.exe',
   details: 'C:\\Windows\\regedit.exe'
 },
 {
   position: 44,
   icon: 'remove_from_queue',
   color: '#3a9aca',
   decoy: 'win12-decoy-2',
   time: new Date(+eventDate + 68234235).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\system32.dllhost.exe',
   details: 'C:\\Windows\\system32.dllhost.exe'
 }, {
   position: 45,
   icon: 'remove_from_queue',
   color: '#3a9aca',
   decoy: 'win12-decoy-2',
   time: new Date(+eventDate + 45774).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\system32.dllhost.exe',
   details: 'C:\\Windows\\system32.dllhost.exe'
 }, {
   position: 46,
   icon: 'remove_from_queue',
   color: '#3a9aca',
   decoy: 'win12-decoy-2',
   time: new Date(+eventDate + 23535).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\system32.dllhost.exe',
   details: 'C:\\Windows\\system32.dllhost.exe'
 },

 {
   position: 47,
   icon: 'warning',
   color: '#ab854c',
   decoy: 'win18-decoy-6',
   time: new Date(+eventDate + 12321).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\system32.dllhost.exe',
   details: 'C:\\Windows\\system32.dllhost.exe'
 },

 {
   position: 48,
   icon: 'file_copy',
   color: '#ff8500',
   decoy: 'win12-decoy-7',
   time: new Date(+eventDate + 123213).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\rexplorer.exe',
   details: 'C:\\Windows\\rexplorer.exe.exe'
 },

 {
   position: 49,
   icon: 'remove_from_queue',
   color: '#ff8500',
   decoy: 'win12-decoy-8',
   time: new Date(+eventDate + 1234).toLocaleString(),
   source: '',
   processName: 'c:\\windows\\explorer.exe',
   details: 'C:\\Windows\\explorer.exe'
 }
];
