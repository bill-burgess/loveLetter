
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cardDirectory').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('cardDirectory').insert({name: 'guard', rank: 1, img_url: 'https://www.google.co.nz/imgres?imgurl=http%3A%2F%2Fwww.alderac.com%2Ftempest%2Ffiles%2F2012%2F08%2FLove_Letter_Card_Guard.jpg&imgrefurl=https%3A%2F%2Fwww.alderac.com%2Ftempest%2Flove-letter%2F&docid=A95Mfqxb_YAfeM&tbnid=uABLeoT_Tys5rM%3A&vet=1&w=300&h=419&client=ubuntu&bih=953&biw=1855&q=love%20letter%20card&ved=0ahUKEwiE9-Pq3bbRAhVKkZQKHWsLD-gQMwgeKAQwBA&iact=mrc&uact=8'}),
        knex('cardDirectory').insert({name: 'priest', rank: 2, img_url: 'https://www.alderac.com/loveletter/files/2014/04/Wedding-Priest.jpg'}),
        knex('cardDirectory').insert({name: 'baron', rank: 3, img_url: 'https://www.google.co.nz/imgres?imgurl=http%3A%2F%2Fwww.alderac.com%2Ftempest%2Ffiles%2F2012%2F08%2FLove_Letter_Card_Baron.jpg&imgrefurl=https%3A%2F%2Fwww.alderac.com%2Ftempest%2Flove-letter%2F&docid=A95Mfqxb_YAfeM&tbnid=tZuTnOi10bseCM%3A&vet=1&w=300&h=418&client=ubuntu&bih=953&biw=1855&q=love%20letter%20card&ved=0ahUKEwiE9-Pq3bbRAhVKkZQKHWsLD-gQMwgaKAAwAA&iact=mrc&uact=8'}),
        knex('cardDirectory').insert({name: 'handmaid', rank: 4, img_url: 'http://www.moonrabbitgames.net/games/loveletter/handmaid.png'}),
        knex('cardDirectory').insert({name: 'prince', rank: 5, img_url: 'https://www.google.co.nz/imgres?imgurl=http%3A%2F%2Fwww.alderac.com%2Ftempest%2Ffiles%2F2012%2F08%2FLove_Letter_Card_Prince.jpg&imgrefurl=https%3A%2F%2Fwww.alderac.com%2Ftempest%2Flove-letter%2F&docid=A95Mfqxb_YAfeM&tbnid=GzkJ1LEUDm-slM%3A&vet=1&w=300&h=419&client=ubuntu&bih=953&biw=1855&q=love%20letter%20card&ved=0ahUKEwiE9-Pq3bbRAhVKkZQKHWsLD-gQMwgfKAUwBQ&iact=mrc&uact=8'}),
        knex('cardDirectory').insert({name: 'king', rank: 6, img_url: 'https://www.alderac.com/tempest/files/2012/09/Love_Letter_Card_King.jpg'}),
        knex('cardDirectory').insert({name: 'countess', rank: 7, img_url: 'http://www.moonrabbitgames.net/games/loveletter/countess.png'}),
        knex('cardDirectory').insert({name: 'princess', rank: 8, img_url: 'https://www.google.co.nz/imgres?imgurl=http%3A%2F%2Fwww.alderac.com%2Ftempest%2Ffiles%2F2012%2F08%2FLove_Letter_Card_Princess.jpg&imgrefurl=https%3A%2F%2Fwww.alderac.com%2Ftempest%2Flove-letter%2F&docid=A95Mfqxb_YAfeM&tbnid=PJrkBK9w15OhfM%3A&vet=1&w=300&h=419&client=ubuntu&bih=953&biw=1855&q=love%20letter%20card&ved=0ahUKEwiE9-Pq3bbRAhVKkZQKHWsLD-gQMwgbKAEwAQ&iact=mrc&uact=8'})
      ])
    })
}
