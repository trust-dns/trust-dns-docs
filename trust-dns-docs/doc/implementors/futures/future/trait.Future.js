(function() {var implementors = {};
implementors["trust_dns"] = [{text:"impl&lt;SenderFuture, Sender, Response&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"trust_dns/client/struct.ClientFuture.html\" title=\"struct trust_dns::client::ClientFuture\">ClientFuture</a>&lt;SenderFuture, Sender, Response&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SenderFuture: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a>&lt;Item = Sender, Error = <a class=\"struct\" href=\"trust_dns_proto/error/struct.ProtoError.html\" title=\"struct trust_dns_proto::error::ProtoError\">ProtoError</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Sender: <a class=\"trait\" href=\"trust_dns_proto/xfer/trait.DnsRequestSender.html\" title=\"trait trust_dns_proto::xfer::DnsRequestSender\">DnsRequestSender</a>&lt;DnsResponseFuture = Response&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Response: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a>&lt;Item = <a class=\"struct\" href=\"trust_dns/op/struct.DnsResponse.html\" title=\"struct trust_dns::op::DnsResponse\">DnsResponse</a>, Error = <a class=\"struct\" href=\"trust_dns_proto/error/struct.ProtoError.html\" title=\"struct trust_dns_proto::error::ProtoError\">ProtoError</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:false,types:["trust_dns::client::client_future::ClientFuture"]},{text:"impl&lt;R&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"trust_dns/client/struct.ClientResponse.html\" title=\"struct trust_dns::client::ClientResponse\">ClientResponse</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a>&lt;Item = <a class=\"struct\" href=\"trust_dns/op/struct.DnsResponse.html\" title=\"struct trust_dns::op::DnsResponse\">DnsResponse</a>, Error = <a class=\"struct\" href=\"trust_dns_proto/error/struct.ProtoError.html\" title=\"struct trust_dns_proto::error::ProtoError\">ProtoError</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>",synthetic:false,types:["trust_dns::client::client_future::ClientResponse"]},];
implementors["trust_dns_https"] = [{text:"impl <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"trust_dns_https/struct.HttpsSerialResponse.html\" title=\"struct trust_dns_https::HttpsSerialResponse\">HttpsSerialResponse</a>",synthetic:false,types:["trust_dns_https::https_client_stream::HttpsSerialResponse"]},{text:"impl <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"trust_dns_https/struct.HttpsClientConnect.html\" title=\"struct trust_dns_https::HttpsClientConnect\">HttpsClientConnect</a>",synthetic:false,types:["trust_dns_https::https_client_stream::HttpsClientConnect"]},{text:"impl&lt;R&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"trust_dns_https/https_server/struct.HttpsToMessage.html\" title=\"struct trust_dns_https::https_server::HttpsToMessage\">HttpsToMessage</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>&lt;Item = <a class=\"struct\" href=\"https://docs.rs/bytes/0.4.12/bytes/bytes/struct.Bytes.html\" title=\"struct bytes::bytes::Bytes\">Bytes</a>, Error = <a class=\"struct\" href=\"https://docs.rs/h2/0.1.18/h2/error/struct.Error.html\" title=\"struct h2::error::Error\">Error</a>&gt; + 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:false,types:["trust_dns_https::https_server::HttpsToMessage"]},];
implementors["trust_dns_proto"] = [{text:"impl <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"trust_dns_proto/multicast/struct.MdnsClientConnect.html\" title=\"struct trust_dns_proto::multicast::MdnsClientConnect\">MdnsClientConnect</a>",synthetic:false,types:["trust_dns_proto::multicast::mdns_client_stream::MdnsClientConnect"]},{text:"impl <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"trust_dns_proto/tcp/struct.TcpClientConnect.html\" title=\"struct trust_dns_proto::tcp::TcpClientConnect\">TcpClientConnect</a>",synthetic:false,types:["trust_dns_proto::tcp::tcp_client_stream::TcpClientConnect"]},{text:"impl <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"trust_dns_proto/udp/struct.UdpResponse.html\" title=\"struct trust_dns_proto::udp::UdpResponse\">UdpResponse</a>",synthetic:false,types:["trust_dns_proto::udp::udp_client_stream::UdpResponse"]},{text:"impl&lt;MF:&nbsp;<a class=\"trait\" href=\"trust_dns_proto/op/message/trait.MessageFinalizer.html\" title=\"trait trust_dns_proto::op::message::MessageFinalizer\">MessageFinalizer</a>&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"trust_dns_proto/udp/struct.UdpClientConnect.html\" title=\"struct trust_dns_proto::udp::UdpClientConnect\">UdpClientConnect</a>&lt;MF&gt;",synthetic:false,types:["trust_dns_proto::udp::udp_client_stream::UdpClientConnect"]},{text:"impl&lt;S, R&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"trust_dns_proto/xfer/struct.DnsExchange.html\" title=\"struct trust_dns_proto::xfer::DnsExchange\">DnsExchange</a>&lt;S, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"trust_dns_proto/xfer/trait.DnsRequestSender.html\" title=\"trait trust_dns_proto::xfer::DnsRequestSender\">DnsRequestSender</a>&lt;DnsResponseFuture = R&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a>&lt;Item = <a class=\"struct\" href=\"trust_dns_proto/xfer/dns_response/struct.DnsResponse.html\" title=\"struct trust_dns_proto::xfer::dns_response::DnsResponse\">DnsResponse</a>, Error = <a class=\"struct\" href=\"trust_dns_proto/error/struct.ProtoError.html\" title=\"struct trust_dns_proto::error::ProtoError\">ProtoError</a>&gt; + 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:false,types:["trust_dns_proto::xfer::dns_exchange::DnsExchange"]},{text:"impl&lt;F, S, R&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"trust_dns_proto/xfer/struct.DnsExchangeConnect.html\" title=\"struct trust_dns_proto::xfer::DnsExchangeConnect\">DnsExchangeConnect</a>&lt;F, S, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a>&lt;Item = S, Error = <a class=\"struct\" href=\"trust_dns_proto/error/struct.ProtoError.html\" title=\"struct trust_dns_proto::error::ProtoError\">ProtoError</a>&gt; + 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"trust_dns_proto/xfer/trait.DnsRequestSender.html\" title=\"trait trust_dns_proto::xfer::DnsRequestSender\">DnsRequestSender</a>&lt;DnsResponseFuture = R&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a>&lt;Item = <a class=\"struct\" href=\"trust_dns_proto/xfer/dns_response/struct.DnsResponse.html\" title=\"struct trust_dns_proto::xfer::dns_response::DnsResponse\">DnsResponse</a>, Error = <a class=\"struct\" href=\"trust_dns_proto/error/struct.ProtoError.html\" title=\"struct trust_dns_proto::error::ProtoError\">ProtoError</a>&gt; + 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:false,types:["trust_dns_proto::xfer::dns_exchange::DnsExchangeConnect"]},{text:"impl&lt;F, S, MF&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"trust_dns_proto/xfer/dns_multiplexer/struct.DnsMultiplexerConnect.html\" title=\"struct trust_dns_proto::xfer::dns_multiplexer::DnsMultiplexerConnect\">DnsMultiplexerConnect</a>&lt;F, S, MF&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a>&lt;Item = S, Error = <a class=\"struct\" href=\"trust_dns_proto/error/struct.ProtoError.html\" title=\"struct trust_dns_proto::error::ProtoError\">ProtoError</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"trust_dns_proto/xfer/trait.DnsClientStream.html\" title=\"trait trust_dns_proto::xfer::DnsClientStream\">DnsClientStream</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;MF: <a class=\"trait\" href=\"trust_dns_proto/op/message/trait.MessageFinalizer.html\" title=\"trait trust_dns_proto::op::message::MessageFinalizer\">MessageFinalizer</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,&nbsp;</span>",synthetic:false,types:["trust_dns_proto::xfer::dns_multiplexer::DnsMultiplexerConnect"]},{text:"impl <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"trust_dns_proto/xfer/dns_multiplexer/struct.DnsMultiplexerSerialResponse.html\" title=\"struct trust_dns_proto::xfer::dns_multiplexer::DnsMultiplexerSerialResponse\">DnsMultiplexerSerialResponse</a>",synthetic:false,types:["trust_dns_proto::xfer::dns_multiplexer::DnsMultiplexerSerialResponse"]},{text:"impl&lt;F&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"enum\" href=\"trust_dns_proto/xfer/enum.OneshotDnsResponseReceiver.html\" title=\"enum trust_dns_proto::xfer::OneshotDnsResponseReceiver\">OneshotDnsResponseReceiver</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a>&lt;Item = <a class=\"struct\" href=\"trust_dns_proto/xfer/dns_response/struct.DnsResponse.html\" title=\"struct trust_dns_proto::xfer::dns_response::DnsResponse\">DnsResponse</a>, Error = <a class=\"struct\" href=\"trust_dns_proto/error/struct.ProtoError.html\" title=\"struct trust_dns_proto::error::ProtoError\">ProtoError</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:false,types:["trust_dns_proto::xfer::OneshotDnsResponseReceiver"]},];
implementors["trust_dns_resolver"] = [{text:"impl&lt;F, G&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"trust_dns_resolver/struct.Background.html\" title=\"struct trust_dns_resolver::Background\">Background</a>&lt;F, G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a>&lt;Error = <a class=\"struct\" href=\"trust_dns_resolver/error/struct.ResolveError.html\" title=\"struct trust_dns_resolver::error::ResolveError\">ResolveError</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;G: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a>&lt;Error = <a class=\"struct\" href=\"trust_dns_resolver/error/struct.ResolveError.html\" title=\"struct trust_dns_resolver::error::ResolveError\">ResolveError</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://docs.rs/futures/0.1/futures/future/either/enum.Either.html\" title=\"enum futures::future::either::Either\">Either</a>&lt;<a class=\"struct\" href=\"https://docs.rs/futures/0.1/futures/future/and_then/struct.AndThen.html\" title=\"struct futures::future::and_then::AndThen\">AndThen</a>&lt;<a class=\"struct\" href=\"https://docs.rs/futures/0.1/futures/future/map_err/struct.MapErr.html\" title=\"struct futures::future::map_err::MapErr\">MapErr</a>&lt;<a class=\"struct\" href=\"https://docs.rs/futures/0.1/futures/sync/oneshot/struct.Receiver.html\" title=\"struct futures::sync::oneshot::Receiver\">Receiver</a>&lt;F&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.fn.html\">fn</a>(_: <a class=\"struct\" href=\"https://docs.rs/futures/0.1/futures/sync/oneshot/struct.Canceled.html\" title=\"struct futures::sync::oneshot::Canceled\">Canceled</a>) -&gt; <a class=\"struct\" href=\"trust_dns_resolver/error/struct.ResolveError.html\" title=\"struct trust_dns_resolver::error::ResolveError\">ResolveError</a>&gt;, G, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.fn.html\">fn</a>(_: F) -&gt; G&gt;, <a class=\"struct\" href=\"https://docs.rs/futures/0.1/futures/future/result_/struct.FutureResult.html\" title=\"struct futures::future::result_::FutureResult\">FutureResult</a>&lt;G::<a class=\"type\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html#associatedtype.Item\" title=\"type futures::future::Future::Item\">Item</a>, <a class=\"struct\" href=\"trust_dns_resolver/error/struct.ResolveError.html\" title=\"struct trust_dns_resolver::error::ResolveError\">ResolveError</a>&gt;&gt;: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a>&lt;Item = G::<a class=\"type\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html#associatedtype.Item\" title=\"type futures::future::Future::Item\">Item</a>, Error = <a class=\"struct\" href=\"trust_dns_resolver/error/struct.ResolveError.html\" title=\"struct trust_dns_resolver::error::ResolveError\">ResolveError</a>&gt;,&nbsp;</span>",synthetic:false,types:["trust_dns_resolver::async_resolver::Background"]},{text:"impl <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"trust_dns_resolver/dns_sd/struct.ListServicesFuture.html\" title=\"struct trust_dns_resolver::dns_sd::ListServicesFuture\">ListServicesFuture</a>",synthetic:false,types:["trust_dns_resolver::dns_sd::ListServicesFuture"]},{text:"impl <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"trust_dns_resolver/dns_sd/struct.ServiceInfoFuture.html\" title=\"struct trust_dns_resolver::dns_sd::ServiceInfoFuture\">ServiceInfoFuture</a>",synthetic:false,types:["trust_dns_resolver::dns_sd::ServiceInfoFuture"]},{text:"impl <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"trust_dns_resolver/lookup/struct.SrvLookupFuture.html\" title=\"struct trust_dns_resolver::lookup::SrvLookupFuture\">SrvLookupFuture</a>",synthetic:false,types:["trust_dns_resolver::lookup::SrvLookupFuture"]},{text:"impl <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"trust_dns_resolver/lookup/struct.ReverseLookupFuture.html\" title=\"struct trust_dns_resolver::lookup::ReverseLookupFuture\">ReverseLookupFuture</a>",synthetic:false,types:["trust_dns_resolver::lookup::ReverseLookupFuture"]},{text:"impl <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"trust_dns_resolver/lookup/struct.Ipv4LookupFuture.html\" title=\"struct trust_dns_resolver::lookup::Ipv4LookupFuture\">Ipv4LookupFuture</a>",synthetic:false,types:["trust_dns_resolver::lookup::Ipv4LookupFuture"]},{text:"impl <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"trust_dns_resolver/lookup/struct.Ipv6LookupFuture.html\" title=\"struct trust_dns_resolver::lookup::Ipv6LookupFuture\">Ipv6LookupFuture</a>",synthetic:false,types:["trust_dns_resolver::lookup::Ipv6LookupFuture"]},{text:"impl <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"trust_dns_resolver/lookup/struct.MxLookupFuture.html\" title=\"struct trust_dns_resolver::lookup::MxLookupFuture\">MxLookupFuture</a>",synthetic:false,types:["trust_dns_resolver::lookup::MxLookupFuture"]},{text:"impl <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"trust_dns_resolver/lookup/struct.TxtLookupFuture.html\" title=\"struct trust_dns_resolver::lookup::TxtLookupFuture\">TxtLookupFuture</a>",synthetic:false,types:["trust_dns_resolver::lookup::TxtLookupFuture"]},{text:"impl&lt;C:&nbsp;<a class=\"trait\" href=\"trust_dns_proto/xfer/dns_handle/trait.DnsHandle.html\" title=\"trait trust_dns_proto::xfer::dns_handle::DnsHandle\">DnsHandle</a> + 'static&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"trust_dns_resolver/lookup_ip/struct.LookupIpFuture.html\" title=\"struct trust_dns_resolver::lookup_ip::LookupIpFuture\">LookupIpFuture</a>&lt;C&gt;",synthetic:false,types:["trust_dns_resolver::lookup_ip::LookupIpFuture"]},];
implementors["trust_dns_server"] = [{text:"impl <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"trust_dns_server/authority/struct.BoxedLookupFuture.html\" title=\"struct trust_dns_server::authority::BoxedLookupFuture\">BoxedLookupFuture</a>",synthetic:false,types:["trust_dns_server::authority::authority_object::BoxedLookupFuture"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
