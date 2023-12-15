import PocketBase from 'pocketbase';

const pb = new PocketBase('https://pfpf.pockethost.io');
pb.autoCancellation(false);

export default pb;
